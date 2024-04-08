import { useContextProvider } from "../../../Providers/Provider";
import { TiCancel } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";
import logo from "../../../Assets/LOGO.png"

import "./DeleteJobModal.scss"

function DeleteJobModal({jobId, setDeleteJobModal, trigger}) {
    const {API, recruiterID, axios} = useContextProvider()

    function deleteJob() {
        axios
          .delete(`${API}/jobs/${jobId}`)
          .then(() => {
            // need to trigger re render of page after delete
            location.reload();
            setDeleteJobModal(false)})
          .catch((err) => console.log(err));
      }

    return (
        <div className="deleteJobModal">
            <div className="deleteJobModal_content">
                <img src={logo} alt="init-logo" />
            <h3>Confirm Post Deletion</h3>
            <p>Are you sure you want to delete this post?<br/><br/>By deleting this post, the opportunity will be permanently removed from <b>inIT</b>, and all pending applicants will be lost. <br/><br/>This action cannot be undone.</p>

            <div className="deleteJobModal_content_buttons">
                <button className="deleteJobModal_content_buttons_cancel" onClick={() => setDeleteJobModal(false)}>
                    <TiCancel />
                    Cancel
                    </button>
                <button className="deleteJobModal_content_buttons_delete" onClick={() => deleteJob()}>
                    <FaRegCheckCircle />
                    Delete Post
                    </button>
            </div>

            </div>
            
        </div>
    );
}

export default DeleteJobModal;