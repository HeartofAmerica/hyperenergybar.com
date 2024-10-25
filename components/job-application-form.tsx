'use client';

import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function JobApplicationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [dob, setDob] = useState('');
  const [availability, setAvailability] = useState('');
  const [startDate, setStartDate] = useState('');
  const [transportation, setTransportation] = useState(''); // Yes/No for reliable transportation
  const [workEligibility, setWorkEligibility] = useState(''); // Yes/No for work eligibility
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (file: File | null) => void) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, setFile: (file: File | null) => void) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!executeRecaptcha) {
      setStatus('error');
      alert('reCAPTCHA not ready.');
      return;
    }

    if (!resume || !coverLetter) {
      alert('Please upload both your resume and cover letter.');
      setStatus('error');
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha('job_application_form');

      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('phoneNumber', phoneNumber);
      formData.append('email', email);
      formData.append('position', position);
      formData.append('dob', dob);
      formData.append('availability', availability);
      formData.append('startDate', startDate);
      formData.append('transportation', transportation); // Reliable transportation (Yes/No)
      formData.append('workEligibility', workEligibility); // Work eligibility (Yes/No)
      formData.append('resume', resume);
      formData.append('coverLetter', coverLetter);
      formData.append('recaptchaToken', recaptchaToken);

      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        // Clear form fields
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setPosition('');
        setDob('');
        setAvailability('');
        setStartDate('');
        setTransportation('');
        setWorkEligibility('');
        setResume(null);
        setCoverLetter(null);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:grid sm:grid-cols-2 gap-2 sm:gap-5 bg-white shadow-xl rounded-3xl p-5 sm:p-10">
      <div className="mb-2">
        <p className="obvi-sm mb-2">First Name</p>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Last Name</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Phone Number</p>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Position</p>
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        >
          <option value="">Select Position</option>
          <option value="Energista - Ames">Energista - Ames</option>
          <option value="Energista - Altoona">Energista - Altoona</option>
          <option value="Energista - Ankeny">Energista - Ankeny</option>
          <option value="Energista - Grimes">Energista - Grimes</option>
          <option value="Energista - Iowa City">Energista - Iowa City</option>
          <option value="Energista - West Des Moines">Energista - West Des Moines</option>
          <option value="Energista - Waukee">Energista - Waukee</option>
          <option value="Energista - Urbandale">Energista - Urbandale</option>
          <option value="General Manager - Ames">General Manager - Ames</option>
        </select>
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Availability</p>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        >
          <option value="">Select Availability</option>
          <option value="Part-time">Part-time</option>
          <option value="Full-time">Full-time</option>
        </select>
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Date of Birth</p>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">When can you start?</p>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Do you have reliable transportation?</p>
        <select
          value={transportation}
          onChange={(e) => setTransportation(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        >
          <option value="">Select Yes or No</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-2">
        <p className="obvi-sm mb-2">Are you eligible to work in the United States?</p>
        <select
          value={workEligibility}
          onChange={(e) => setWorkEligibility(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        >
          <option value="">Select Yes or No</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="col-span-2">
        <p className="obvi-sm mb-2">Resume</p>
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, setResume)}
          className="flex items-center justify-center border-2 border-dashed border-green rounded-lg p-4 mb-4"
        >
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => handleFileChange(e, setResume)}
            className="hidden"
            id="resume-upload"
          />
          <label htmlFor="resume-upload" className="cursor-pointer">
            {resume ? resume.name : 'Drag & drop your resume here or click to upload'}
          </label>
        </div>
      </div>
      <div className="col-span-2">
        <p className="obvi-sm mb-2">Cover Letter</p>
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, setCoverLetter)}
          className="flex items-center justify-center border-2 border-dashed border-green rounded-lg p-4 mb-4"
        >
          <input
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={(e) => handleFileChange(e, setCoverLetter)}
            className="hidden"
            id="coverletter-upload"
          />
          <label htmlFor="coverletter-upload" className="cursor-pointer">
            {coverLetter ? coverLetter.name : 'Drag & drop your cover letter here or click to upload'}
          </label>
        </div>
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="btn mb-5"
        >
          Submit Application
        </button>
        {status === 'loading' && <p>Submitting your application...</p>}
        {status === 'success' && <p>Your application has been submitted successfully!</p>}
        {status === 'error' && <p>There was an error submitting your application. Please try again.</p>}
      </div>
    </form>
  );
}
