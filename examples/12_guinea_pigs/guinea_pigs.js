import React from 'react';

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

// export class GuineaPigs extends React.Component {
//   render() {
//     const src = this.props.src;
//     return (
//       <div>
//         <h1>Cute Guinea Pigs</h1>
//         <img src={src} />
//       </div>
//     );
//   }
// }

export const GuineaPigs = (props) => {
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={props.src} />
    </div>
  );
};
