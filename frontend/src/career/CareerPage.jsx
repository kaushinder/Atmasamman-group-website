import React, { useState, useRef } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const JOBS = [
  { title: "Frontend Developer", type: "Full-time" },
  { title: "Backend Developer", type: "Full-time" },
  { title: "AI/ML Intern", type: "Internship" },
  { title: "Tech Support", type: "Full-time" },
  { title: "HR Executive", type: "Full-time" },
];

const emptyForm = { name: "", email: "", skills: "", coverLetter: "" };

function Career() {
  const [selectedJob, setSelectedJob] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [resumeFile, setResumeFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [serverError, setServerError] = useState("");
  const fileInputRef = useRef(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setForm(emptyForm);
    setResumeFile(null);
    setErrors({});
    setSuccess("");
    setServerError("");
    setUploadProgress(0);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, resume: "File must be under 5MB" });
      return;
    }
    setResumeFile(file);
    setErrors({ ...errors, resume: "" });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!resumeFile) errs.resume = "Resume is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      let resumeURL = "";
      if (resumeFile) {
        const storageRef = ref(storage, `resumes/${Date.now()}_${resumeFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, resumeFile);
        resumeURL = await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              setUploadProgress(pct);
            },
            reject,
            async () => {
              const url = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(url);
            }
          );
        });
      }

      const res = await fetch(`${API_URL}/api/career`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, position: selectedJob, resumeURL }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.message);
        setForm(emptyForm);
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setServerError(data.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setServerError("Unable to submit application. Please try again.");
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div>
      <section className="text-white text-center py-5" style={{ background: "#0f172a" }}>
        <div className="container">
          <h1 className="fw-bold">Careers at Atmasamman Group</h1>
          <p className="mt-3">Join us to build impactful solutions in IT, AI, and Education.</p>
          <a href="#jobs" className="btn btn-primary mt-3 px-4">Explore Jobs</a>
        </div>
      </section>

      <section className="py-5" style={{ background: "#0f172a" }}>
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-5">Why Work With Us?</h2>
          <div className="row g-4">
            {[
              { icon: "🚀", title: "Fast Growth", desc: "Work on real-world projects and accelerate your career." },
              { icon: "💡", title: "Innovation First", desc: "Be part of AI-driven solutions and cutting-edge tech." },
              { icon: "🤝", title: "Great Culture", desc: "Collaborative team, mentorship, and a positive environment." },
              { icon: "🌍", title: "Real Impact", desc: "Contribute to education, technology, and social initiatives." },
            ].map((card, i) => (
              <div className="col-md-3" key={i}>
                <div className="why-card h-100">
                  <div className="icon-circle">{card.icon}</div>
                  <h5 className="mt-3">{card.title}</h5>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Open Positions</h2>
          <div className="row g-4">
            {JOBS.map((job, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <span className="badge bg-primary mb-2">{job.type}</span>
                    <h5>{job.title}</h5>
                    <p className="text-muted small">Apply for {job.title} at Atmasamman</p>
                    <button
                      className="btn btn-primary w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                      onClick={() => openModal(job.title)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="modal fade" id="applyModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Apply for {selectedJob}</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {success && <div className="alert alert-success">{success}</div>}
              {serverError && <div className="alert alert-danger">{serverError}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input name="name" className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Full Name" value={form.name} onChange={handleChange} />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-2">
                  <input type="email" name="email" className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email" value={form.email} onChange={handleChange} />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-2">
                  <input className="form-control" value={selectedJob} readOnly />
                </div>
                <div className="mb-2">
                  <input name="skills" className="form-control" placeholder="Skills (React, Node.js...)"
                    value={form.skills} onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <textarea name="coverLetter" className="form-control" rows="3"
                    placeholder="Cover Letter (optional)" value={form.coverLetter} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Resume (PDF/DOC, max 5MB) <span className="text-danger">*</span></label>
                  <input type="file" ref={fileInputRef}
                    className={`form-control ${errors.resume ? "is-invalid" : ""}`}
                    accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                  {errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
                </div>
                {loading && uploadProgress > 0 && (
                  <div className="mb-3">
                    <small className="text-muted">Uploading resume... {uploadProgress}%</small>
                    <div className="progress mt-1" style={{ height: "6px" }}>
                      <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  </div>
                )}
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading && <span className="spinner-border spinner-border-sm me-2" />}
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
