import React, { useState } from 'react';
import axios from 'axios';
import Card from '../../../components/cards/Card';
import FpscUploadForm from './FpscUploadForm'; // Import the new FpscUploadForm component
import { Link } from 'react-router-dom';

const BASE_API_URL = 'http://127.0.0.1:5000/api';

const FpscPage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any[]>([]); // State to store JSON data
  const [jsonFile, setJsonFile] = useState<string | null>(null); // Store JSON filename
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null); // Success message
  const [uploadError, setUploadError] = useState<string | null>(null); // Error message
  const [message, setMessage] = useState<string | null>(null); // Store success message
  const [skippedRows, setSkippedRows] = useState<any[]>([]); // State to store skipped rows
  const [processing, setProcessing] = useState<boolean>(false); // To track processing state

  // Handle the "Process" button click
  const handleProcess = async () => {
    if (jsonFile) {
      setProcessing(true);
      try {
        const response = await axios.post(`${BASE_API_URL}/fpsc/process-json/${jsonFile}`);
        setMessage(response.data.message);
        setSkippedRows(response.data.skipped_rows); // Set skipped rows
      } catch (error: any) {
        setUploadError("Error processing data.");
        console.error("Process error:", error);
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="col-span-1">
          {/* Row 1: File Upload Section */}
          <FpscUploadForm
            setJsonData={setJsonData}
            setJsonFile={setJsonFile}
            setUploadSuccess={setUploadSuccess}
            setMessage={setMessage}
            setUploadError={setUploadError}
            setSkippedRows={setSkippedRows} // Pass the setSkippedRows function here
          />
        </div>
        <div className="col-span-1">
          <Card title="FPSC">
            <p>
              The Florida Public Service Commission is committed to making sure that Florida's consumers receive some of their most essential services — electric, natural gas, telephone, water, and wastewater — in a safe, reasonable, and reliable manner.
            </p>
            <br />
            <Link to="https://www.floridapsc.com/reports" className="text-primary hover:primary" target="_blank">Florida Public Service Commission Reports</Link>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {/* Row 2: Upload Status Section */}
        <Card title="Upload Status">
          {uploadSuccess && <div className="text-green-500">{uploadSuccess}</div>}
          {uploadError && <div className="text-red-500">{uploadError}</div>}

          {/* Display the success message and JSON file name */}
          {message && (
            <div>
              <h3>{message}</h3>
              <p><strong>JSON File:</strong> {jsonFile}</p>
            </div>
          )}

          {/* Conditionally render the "Process" button if JSON file is available */}
          {jsonFile && !processing && (
            <div className="mt-4">
              <button
                onClick={handleProcess}
                className="btn btn-primary btn-outline px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Process
              </button>
            </div>
          )}
          
          {/* Display skipped rows */}
          {skippedRows.length > 0 && (
            <div>
              <h4 className="text-red-500">Skipped Rows:</h4>
              <ul className="list-disc ml-6">
                {skippedRows.map((row, index) => (
                  <li key={index}>
                    Duplicate entry skipped for storm_id: {row.storm_id}, county: {row.county}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Row 3: Data Display Section */}
        <Card title="Data">
          {jsonData.length > 0 ? (
            <div>
              <h3>Data Rows:</h3>
              <table className="min-w-full table-auto text-xs">
                <thead>
                  <tr>
                    <th className="px-4 py-2">County</th>
                    <th className="px-4 py-2">FPL Accounts</th>
                    <th className="px-4 py-2">FPL Out</th>
                    <th className="px-4 py-2">FPL Percentage</th>
                    <th className="px-4 py-2">Duke Accounts</th>
                    <th className="px-4 py-2">Duke Out</th>
                    <th className="px-4 py-2">Duke Percentage</th>
                    <th className="px-4 py-2">Tampa Accounts</th>
                    <th className="px-4 py-2">Tampa Out</th>
                    <th className="px-4 py-2">Tampa Percentage</th>
                    <th className="px-4 py-2">FPU Accounts</th>
                    <th className="px-4 py-2">FPU Out</th>
                    <th className="px-4 py-2">FPU Percentage</th>
                    <th className="px-4 py-2">Cooperatives Accounts</th>
                    <th className="px-4 py-2">Cooperatives Out</th>
                    <th className="px-4 py-2">Cooperatives Percentage</th>
                    <th className="px-4 py-2">Municipals Accounts</th>
                    <th className="px-4 py-2">Municipals Out</th>
                    <th className="px-4 py-2">Municipals Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {jsonData.map((row, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{row.county}</td>
                      <td className="border px-4 py-2">{row.fpl_accounts}</td>
                      <td className="border px-4 py-2">{row.fpl_out}</td>
                      <td className="border px-4 py-2">{row.fpl_percentage}</td>
                      <td className="border px-4 py-2">{row.duke_accounts}</td>
                      <td className="border px-4 py-2">{row.duke_out}</td>
                      <td className="border px-4 py-2">{row.duke_percentage}</td>
                      <td className="border px-4 py-2">{row.tampa_accounts}</td>
                      <td className="border px-4 py-2">{row.tampa_out}</td>
                      <td className="border px-4 py-2">{row.tampa_percentage}</td>
                      <td className="border px-4 py-2">{row.fpu_accounts}</td>
                      <td className="border px-4 py-2">{row.fpu_out}</td>
                      <td className="border px-4 py-2">{row.fpu_percentage}</td>
                      <td className="border px-4 py-2">{row.cooperatives_accounts}</td>
                      <td className="border px-4 py-2">{row.cooperatives_out}</td>
                      <td className="border px-4 py-2">{row.cooperatives_percentage}</td>
                      <td className="border px-4 py-2">{row.municipals_accounts}</td>
                      <td className="border px-4 py-2">{row.municipals_out}</td>
                      <td className="border px-4 py-2">{row.municipals_percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No data available. Upload a file to see the results.</p>
          )}
        </Card>
      </div>
    </>
  );
};

export default FpscPage;
