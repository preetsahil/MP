import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

const CompanySearchDropdown = ({ companies, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value);
  const dropdownRef = useRef(null);

  const filteredCompanies = (companies || [])
    .filter((company) => typeof company === "string")
    .filter((company, index, self) => self.indexOf(company) === index)
    .filter((company) =>
      company.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    onChange(e);
  };

  const handleCompanySelect = (company) => {
    setSearchTerm(company);
    setIsOpen(false);
    onChange({ target: { name: "company_name", value: company } });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="relative">
        <input
          type="text"
          name="company_name"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder="Search for a company..."
          className="w-full border-2 border-gray-200 rounded-xl p-3 pl-10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
          required
        />
        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
      </div>

      {isOpen && filteredCompanies.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto transform transition-all duration-300 ease-in-out">
          {filteredCompanies.map((company, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              onClick={() => handleCompanySelect(company)}
            >
              <span className="text-gray-700">{company}</span>
            </div>
          ))}
        </div>
      )}

      {isOpen && filteredCompanies.length === 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4">
          <span className="text-gray-500">No companies found</span>
        </div>
      )}
    </div>
  );
};

export default CompanySearchDropdown;