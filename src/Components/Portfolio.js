import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
       if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="projects__out-container">
                <h2>{projects.title}</h2>
                <ul>
                  <li><h6>~{projects.category1}</h6></li>
                  <li><h6>~{projects.category2}</h6></li>
                  <li><h6>~{projects.category3}</h6></li>
                  <li><h6>~{projects.category4}</h6></li>
                </ul>
                <a href ={projects.url}>Find It Here</a>
            </div>
            <div className="project__img-container">
            <a href ={projects.url}><img src={projectImage}/></a>
            </div>
          </div>
        </div>
        )
      })
    }

    // if(this.props.data){
    //   var projects = this.props.data.projects.map(function(projects){
    //     var projectImage = 'images/portfolio/'+projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={projects.url} title={projects.title}>
    //            <img alt={projects.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{projects.title}</h5>
    //                  <p>{projects.category}</p>
    //               </div>
    //             </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    // }
 
  

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Projects.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
