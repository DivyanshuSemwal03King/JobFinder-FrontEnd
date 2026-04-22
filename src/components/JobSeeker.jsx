import profile from "../assets/profile.jpeg";
import jobIcon from '../assets/jobIcon.png';
import search from '../assets/search.png';
function JobSeeker() {
    return (
        <>
            <div className="jobseeker-div">
                <div className="jobseeker-content">
                    <div className="jobseeker-head">
                        <div className="jobseeker-profile">
                            <div className="profile">
                                <div className="profile-pic">
                                    <img src={profile} alt="Profile Picture" />
                                </div>
                                <div className="profile-info">
                                    <h2>John Doe</h2>
                                    <p>Experienced Driver</p>
                                    <p>Preamnagar Deheradun</p>
                                </div>


                            </div>
                          
                        </div>
                          <div className="jobseeker-browse">
                                <button className="browse-btn">Browse Jobs</button>
                                <button className="back-btn">Back</button>

                            </div>
                    </div>
                    <div className="jobseeker-actives">
                        <div className="Applied-jobs">
                            <div className="applied-img"><img src={jobIcon} alt="job Icon" /></div>
                            <div className="applied-details"><p>current jobs 2</p>
                                <p>Applied Jobs</p></div>
                        </div>
                        <div className="saved-jobs">
                            <div className="saved-img"><img src={search} alt="Saved Icon" /></div>
                            <div className="saved-details"><p>saved jobs 2</p>
                                <p>Saved Jobs</p></div>
                        </div>
                    </div>
                    <div className="jobseeker-applied">
                        <div className="swap-sections">
                            <button className="jobseeker-applied-jobs-btn">Applied Jobs</button>
                            <button className="jobseeker-saved-jobs-btn">Saved Jobs</button>
                        </div>
                        <div className="jobseeker-view-section">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default JobSeeker; 