import projectImage from '../assets/Breast cancer .png';

function BreastCancer() {
  return (
    <section className="project-page">
      <h1>
        Breast Cancer Detection using Machine Learning and Deep Learning
      </h1>

      <img
        src={projectImage}
        alt="Breast Cancer Detection Machine Learning Project"
        className="project-image"
      />

      <p>
        The use of deep learning for automated breast cancer detection from
        mammogram images. More specifically focusing on the ResNet convolutional
        neural network (CNN) architecture and how we can leverage transfer
        learning from models pre-trained on large image datasets, these
        datasets contain the information of the mammographic images in breast
        cancer using to improve detection accuracy compared to human
        radiologists. This abstract outlines the motivation, background,
        methodology, results, and ethical considerations of my work.
      </p>
    </section>
  );
}

export default BreastCancer;