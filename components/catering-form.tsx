'use client';

import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function CateringForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfEvent, setDateOfEvent] = useState('');
  const [attendees, setAttendees] = useState('');
  const [purposeOfEvent, setPurposeOfEvent] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [status, setStatus] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!executeRecaptcha) {
      setStatus('error');
      alert('reCAPTCHA not ready.');
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha('catering_form');

      const response = await fetch('/api/catering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          company,
          address,
          dateOfEvent,
          attendees,
          purposeOfEvent,
          timeOfDay,
          specialRequests,
          recaptchaToken,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setCompany('');
        setAddress('');
        setDateOfEvent('');
        setAttendees('');
        setPurposeOfEvent('');
        setTimeOfDay('');
        setSpecialRequests('');
      } else {
        const errorData = await response.json();
        console.error('Server Error:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:grid sm:grid-cols-2 gap-5 bg-white shadow-xl rounded-3xl p-5 sm:p-10">
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">First Name</p>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Last Name</p>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Phone Number</p>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Company</p>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Address</p>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Date of Event</p>
        <input
          type="date"
          value={dateOfEvent}
          onChange={(e) => setDateOfEvent(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">How Many Attendees</p>
        <input
          type="number"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Purpose of Event</p>
        <input
          type="text"
          value={purposeOfEvent}
          onChange={(e) => setPurposeOfEvent(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        />
      </div>
      <div className="col-span-1 mb-3 sm:mb-0">
        <p className="obvi-sm mb-2">Time of Day</p>
        <select
          value={timeOfDay}
          onChange={(e) => setTimeOfDay(e.target.value)}
          required
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        >
          <option value=""></option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
      <div className="col-span-2">
        <p className="obvi-sm mb-2">Special Requests / Additional Notes</p>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          className="w-full px-5 py-3 rounded-lg border border-green/25 hover:border-green focus:border-green transition-all duration-300"
        ></textarea>
      </div>
      <div className="col-span-2 mt-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-10 py-3 rounded-lg ${status === 'loading' ? '' : 'btn'}`}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Catering Request'}
        </button>
        {status === 'success' && <p className="text-green-600 mt-2">Request submitted successfully!</p>}
        {status === 'error' && <p className="text-red-600 mt-2">Error submitting request. Please try again.</p>}
      </div>
    </form>
  );
}
