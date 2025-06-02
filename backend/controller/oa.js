import Student from "../models/user_model/student.js";
import JobProfile from "../models/jobprofile.js";
import mongoose from "mongoose";

export const getEligibleUpcomingOAs = async (req, res) => {
  try {
    const studentId = req.user.userId;
    console.log("Student ID:", req.user.userId);
    const studentObjectId = new mongoose.Types.ObjectId(studentId);

    const jobsWithOAs = await JobProfile.find({
      "Hiring_Workflow.eligible_students": studentObjectId,
    })
      .select("company_name company_logo Hiring_Workflow")
      .lean();

    const upcomingOAs = jobsWithOAs.flatMap((job) => {
      const workflow = Array.isArray(job.Hiring_Workflow) ? job.Hiring_Workflow : [];

      return workflow
        .filter(
          (step) =>
            step.step_type === "OA" &&
            step.eligible_students.some((id) => id.equals(studentObjectId)) &&
            new Date(step.details?.oa_date) > new Date()
        )
        .map((step) => {
          const oaLinks = Array.isArray(step.details.oa_link)
            ? step.details?.oa_link
            : [];

          const studentOALink = oaLinks.find((link) => {
            if (!link.studentId) return false;

            const linkStudentId =
              typeof link.studentId === "string"
                ? new mongoose.Types.ObjectId(link.studentId)
                : link.studentId;

            return linkStudentId.equals(studentObjectId);
          });
          const isLinkVisible = studentOALink?.visibility !== false;

          return {
            company_name: job.company_name,
            company_logo: job.company_logo,
            oa_date: step.details?.oa_date,
            oa_login_time: step.details?.oa_login_time || step.details?.login_time,
            oa_duration: step.details?.oa_duration,
            oa_info: step.details?.oa_info,
            oa_link: isLinkVisible ? studentOALink?.oaLink || "No link available" : "Link not visible",
            isLinkVisible,
            was_shortlisted:
            step.shortlisted_students?.length === 0
              ? "Result yet to be declared"
              : step.shortlisted_students.some((id) => id.toString() === studentId) || false,
          };
        });
    });

    res.status(200).json({ upcomingOAs });
  } catch (error) {
    console.error("Error fetching upcoming OAs:", error);
    res.status(500).json({ message: "Server error while fetching upcoming OAs." });
  }
};

export const getEligiblePastOAs = async (req, res) => {
  try {
    const studentId = req.user.userId;
    const studentObjectId = new mongoose.Types.ObjectId(studentId);

    const jobsWithOAs = await JobProfile.find({
      "Hiring_Workflow.eligible_students": studentObjectId,
    })
      .select("company_name company_logo Hiring_Workflow")
      .lean();

    const pastOAs = jobsWithOAs.flatMap((job) => {
      const workflow = Array.isArray(job.Hiring_Workflow) ? job.Hiring_Workflow : [];

      return workflow
        .filter(
          (step) =>
            step.step_type === "OA" &&
            step.eligible_students.some((id) => id.equals(studentObjectId)) &&
            new Date(step.details?.oa_date) < new Date()
        )
        .map((step) => {
          const oaLinks = Array.isArray(step.details.oa_link)
            ? step.details?.oa_link
            : [];

          const studentOALink = oaLinks.find((link) => {
            if (!link.studentId) return false;

            const linkStudentId =
              typeof link.studentId === "string"
                ? new mongoose.Types.ObjectId(link.studentId)
                : link.studentId;

            return linkStudentId.equals(studentObjectId);
          });

          const isLinkVisible = studentOALink?.visibility !== false;

          return {
            company_name: job.company_name,
            company_logo: job.company_logo,
            oa_date: step.details?.oa_date,
            oa_login_time: step.details?.oa_login_time || step.details?.login_time,
            oa_duration: step.details?.oa_duration,
            oa_info: step.details?.oa_info,
            oa_link: isLinkVisible ? studentOALink?.oaLink || "No link available" : "Link not visible",
            isLinkVisible,
            was_shortlisted:
              step.shortlisted_students?.length === 0
                ? "Result yet to be declared"
                : step.shortlisted_students.some((id) => id.toString() === studentId) || false,
          };
        });
    });

    pastOAs.sort((a, b) => new Date(b.oa_date) - new Date(a.oa_date));
    res.status(200).json({ pastOAs });
  } catch (error) {
    console.error("Error fetching past OAs:", error);
    res.status(500).json({ message: "Server error while fetching past OAs." });
  }
};