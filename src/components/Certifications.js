import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Certifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeCertifications && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.certifications;
      var certifications = this.props.resumeCertifications.map(function (certifications) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={certifications.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(certifications)}>
                <div>
                  <img
                    src={certifications.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{certifications.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {certifications.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="certifications">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "white" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{certifications}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Certifications;
