import React, { useState } from 'react';
import axios from 'axios'; // Import axios to make HTTP requests

const UploadFpscForm: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false); // State to manage upload status
    const [uploadSuccess, setUploadSuccess] = useState<string | null>(null); // Success message
    const [uploadError, setUploadError] = useState<string | null>(null); // Error message

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            // Convert the FileList to an array of files
            setSelectedFiles(Array.from(event.target.files));
            console.log('File selected:', event.target.files);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form submitted');
        
        if (selectedFiles.length > 0) {
            console.log('Files to upload:', selectedFiles);
            setUploading(true);
            setUploadSuccess(null); // Reset success message
            setUploadError(null); // Reset error message

            // Create a FormData object to send the file
            const formData = new FormData();
            formData.append('file', selectedFiles[0]); // Assuming only one file is being uploaded
            console.log('Form data prepared:', formData);

            try {
                // Send the file to the server via the /florida-psc/upload-pdf endpoint
                const BASE_API_URL = 'http://127.0.0.1/api';
                console.log(`Sending file to ${BASE_API_URL}/fpsc/upload-pdfs`);

                const response = await axios.post(`${BASE_API_URL}/fpsc/upload-pdfs`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Handle successful response
                console.log('Upload successful:', response.data);
                setUploadSuccess(response.data.message); // Assuming the response includes a message
            } catch (error: any) {
                // Handle error response
                console.error('Upload error:', error);
                setUploadError(error.response?.data?.error || 'Error uploading file');
            } finally {
                setUploading(false);
            }
        } else {
            console.log('No files selected');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* File Input */}
            <div className="flex items-center gap-3 mb-10">
                <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="file-input"
                    accept=".pdf"
                />
            </div>

            {/* Selected Files List */}
            {selectedFiles.length > 0 &&
                selectedFiles.map((file, index) => (
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

            {/* Upload Status */}
            {uploading && <div>Uploading...</div>}
            {uploadSuccess && <div className="text-green-500">{uploadSuccess}</div>}
            {uploadError && <div className="text-red-500">{uploadError}</div>}

            {/* Submit Button */}
            <div className="flex items-center gap-3 mt-10 w-full">
                <button
                    type="submit"
                    className="btn btn-primary btn-outline px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                    disabled={uploading}
                >
                    Upload
                </button>
            </div>
        </form>
    );
};

export default UploadFpscForm;
