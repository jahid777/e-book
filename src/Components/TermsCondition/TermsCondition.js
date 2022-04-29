import React from "react";
import { useHistory } from "react-router-dom";
import "./TermsCondition.css";

const TermsCondition = () => {
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.setItem("token", "");
    history.push("/");
  };

  //redirect add book page
  const handleAgreBtn = () => {
    setTimeout(() => {
      history.push("/addBook");
    }, 150);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center mt-5 termsAndConditionHead">WELCOME!</h1>
      <div className="form-check agreeCheckbox">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onClick={() => handleAgreBtn()}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          I Agree
        </label>
      </div>
      <div className="termsAndConditionsBody my-5">
        <button className="btn mb-2 tAndCBtn" data-bs-toggle="modal" data-bs-target="#termsAndCondition">Terms And Conditions</button>
        <span>Research and Education Purpose only.</span>
      </div>

      {/* Terms and Conditions modal */}
      <div class="modal fade" id="termsAndCondition" tabindex="-1" aria-labelledby="termsAndConditionLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="termsAndConditionLabel">Terms And Conditions</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            All of the products on this store are intended for either novelty or theatrical use, or to replace a lost or already existing document.<br/>

While it is not illegal to buy / sell or produce fake documents, use a fabricated document in the real world is fraud. This may include, but is not limited to, using the document to gain financial loans or to impersonate someone else. If we are under the belief an order is going to be used for fraudulent activities, the order will be cancelled and may not be refunded.
<br/>
Fake Documents cannot be held accountable for any fraudulent usage of these documents. Ultimately, what you do with these documents is your responsibility and you may be liable for any consequences of misuse.
<br/>
Please use our documents responsibly.
            </div>
          </div>
        </div>
      </div>
      {/* Terms and Conditions modal */}
      <div className="d-flex justify-content-center">
        <button onClick={() => handleLogout()} className="btn btn-danger">
        <i className="bi bi-x-lg"></i> Disagree
        </button>
      </div>    
    </div>
  );
};

export default TermsCondition;
