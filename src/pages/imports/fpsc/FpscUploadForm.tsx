import React, { useState } from 'react';
import axios from 'axios';
import Card from '../../../components/cards/Card';
import config from '../../../helpers/config';

const BASE_API_URL = config.apiUrl;

interface FpscUploadFormProps {
    setJsonData: React.Dispatch<React.SetStateAction<any[]>>;
    setJsonFile: React.Dispatch<React.SetStateAction<string | null>>;
    setUploadSuccess: React.Dispatch<React.SetStateAction<string | null>>;
    setMessage: React.Dispatch<React.SetStateAction<string | null>>;
    setUploadError: React.Dispatch<React.SetStateAction<string | null>>;
    setSkippedRows: React.Dispatch<React.SetStateAction<any[]>>; // Add this line
}

const FpscUploadForm: React.FC<FpscUploadFormProps> = ({
    setJsonData,
    setJsonFile,
    setUploadSuccess,
    setMessage,
    setUploadError,
}) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // State for selected files
    const [uploading, setUploading] = useState(false); // Upload status

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFiles(Array.from(event.target.files)); // Update selected files
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (selectedFiles.length > 0) {
            setUploading(true);
            setUploadSuccess(null);
            setUploadError(null);

            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('files', file); // Append all files to 'files' field
            });

            try {
                const response = await axios.post(`${BASE_API_URL}/fpsc/upload-pdfs`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                const responseData = response.data;
                if (responseData) {
                    setUploadSuccess(responseData.message);
                    setJsonData(responseData.json?.data || []); // Store JSON data for the first file
                    setJsonFile(responseData.json?.json_file || null); // Set JSON file name for the first file
                    setMessage(responseData.message); // Set success message
                }
            } catch (error: any) { // Explicitly typing 'error' as 'any'
                setUploadError(error.response?.data?.error || 'Error uploading files');
            } finally {
                setUploading(false);
            }
        } else {
            setUploadError('No files selected for upload.');
        }
    };

    return (
        <Card title="Upload">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 mb-10">
                    <input
                        type="file"
                        id="file"
                        multiple // Allow multiple files to be selected
                        onChange={handleFileChange}
                        className="file-input"
                        accept=".pdf"
                    />
                </div>

                {selectedFiles.length > 0 && selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 mb-4">
                        <div className="flex items-center grow gap-2.5">
                            <img
                                src="/assets/media/file-types/pdf.svg"
                                alt="File type icon"
                                className="w-6 h-6"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-900 cursor-pointer hover:text-primary mb-px">
                                    {file.name}
                                </span>
                                <span className="text-xs text-gray-700">
                                    {(file.size / 1024).toFixed(2)} KB
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex items-center gap-3 mt-10 w-full">
                    <button
                        type="submit"
                        className="btn btn-primary btn-outline px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                        disabled={uploading}
                    >
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default FpscUploadForm;
