import jobIcon from '../assets/jobIcon.png';
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
function PostNewJob() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="post-body">
                <Nav />
                <div className="post-container">
                    <div className="post-header">
                        <img src={jobIcon} alt="" />
                        <h1>Post a New Job</h1>
                        <p>Fill out the form below to post a new job listing.</p>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <h2>Basic Information</h2>

                        {/* FIXED: added className */}
                        <div className="form-grid">

                            <div className='label-div'>
                                <label htmlFor="job-title">Job Title</label>
                                <input name="jobTitle" type="text" id="job-title" placeholder="e.g., Driver " />
                            </div>

                            <div className='label-div'> <label htmlFor="company-name">Company Name</label>
                                <input name="companyName" type="text" id="company-name" placeholder="e.g., ABC Company " /></div>

                            <div className='label-div'> <label htmlFor="location">Location</label>
                                <input name="location" type="text" id="location" placeholder="e.g., New York, NY " /></div>

                            <div className='label-div'> <label htmlFor="job-type">Job Type</label>
                                <select name="jobType" id="job-type">
                                    <option value="">Select Job Type</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                </select></div>

                            <div className='label-div'>    <label htmlFor="salary-range">Salary Range</label>
                                <input name="salaryRange" type="text" id="salary-range" placeholder="e.g., 1K to 2K/Day" /></div>

                            <div className='label-div'>  <label htmlFor="skills">
                                Required Skills <span>(comma-separated)</span>
                            </label>
                                <input name="skills" type="text" id="skills" placeholder="e.g., Driving, Communication, Time Management " />
                            </div>
                        </div>
                        <h2>Job Details</h2>
                        <div className="job-details-label">


                            <div className='job-details-label'>     <label htmlFor="job-description">Job Description</label>
                                <textarea name="jobDescription" id="job-description" placeholder="Provide a detailed job description here..."></textarea></div>

                            <div className='job-details-label'> <label htmlFor="responsibilities">Responsibilities <span>(One Per Line)</span></label>
                                <textarea name="responsibilities" id="responsibilities" placeholder="List the key responsibilities for this role..."></textarea></div>

                            <div className='job-details-label'> <label htmlFor="requirements">Requirements <span>(One Per Line)</span></label>
                                <textarea name="requirements" id="requirements" placeholder="List the key requirements for this role..."></textarea></div>

                            <div className='job-details-label'> <label htmlFor="benefits">Benefits <span>(One Per Line)</span></label>
                                <textarea name="benefits" id="benefits" placeholder="List the benefits offered for this role..."></textarea></div>

                           <div className='job-btns'> <button type="submit" className="post-btn">Post Job</button>
                            <button type="button" className="cancel-btn">Cancel</button></div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default PostNewJob;