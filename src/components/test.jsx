
// export const App = () => {
//   return (
//     <>
//       <Feedback />
//       <Statistics 
//         good={_} 
//         neutral={_} 
//         bad={_} 
//         total={_} 
//         positivePercentage={_}
//         />
//     </>
//   );
// };
// import React from 'react'

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div>
//         <button key={option} onClick={() => onLeaveFeedback(option)}>Good</button>
//         <button key={option} onClick={() => onLeaveFeedback(option)}>Neutral</button>
//         <button key={option} onClick={() => onLeaveFeedback(option)}>Bad</button>
//     </div>
//   )
// }

// export default FeedbackOptions

// class Feedback extends Component {
// 	state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//         total: 0,
//         goodPersent: 0
//     }
    
//     countPositiveFeedback = () => {
//         this.setState((prev) => {
//         const newGood = prev.good + 1;
//         const newTotal = prev.total + 1;
//         const newGoodPercent = newTotal > 0 ? Math.round((newGood / newTotal) * 100) : 0;

//             return {
//                 good: newGood,
//                 total: newTotal,
//                 goodPersent: newGoodPercent,
//             };
//         });
// 		// this.setState((prev) => ({
//         //     good: prev.good + 1,
//         //     total: prev.total + 1,
//         //     goodPersent: prev.total > 0 ? Math.round((prev.good / prev.total) * 100) : 0,  
// 		// }))
//     }
    
//     countNeutralFeedback = () => {
//         this.setState((prev) => {
//         const newNeutral = prev.neutral + 1;
//         const newTotal = prev.total + 1;
//         const newGoodPercent = newTotal > 0 ? Math.round((prev.good / newTotal) * 100) : 0;

//             return {
//                 good: prev.good,
//                 neutral: newNeutral,
//                 total: newTotal,
//                 goodPersent: newGoodPercent,
//             };
//         });
// 		// this.setState((prev) => ({
//         //     neutral: prev.neutral + 1,
//         //     total: prev.total + 1,
//         //     goodPersent: prev.total > 0 ? Math.round((prev.good / prev.total) * 100) : 0,
// 		// }))
//     }
    
//     countNegativeFeedback = () => {
//         this.setState((prev) => {
//         const newBad = prev.bad + 1;
//         const newTotal = prev.total + 1;
//         const newGoodPercent = newTotal > 0 ? Math.round((prev.good / newTotal) * 100) : 0;

//             return {
//             bad: newBad,
//             total: newTotal,
//             goodPersent: newGoodPercent,
//             };
//         });
// 		// this.setState((prev) => ({
//         //     bad: prev.bad + 1,
//         //     total: prev.total + 1,
//         //     goodPersent: prev.total > 0 ? Math.round((prev.good / prev.total) * 100) : 0,
// 		// }))
// 	}

//     render() {
//         return (
//             <div>
//                 <h1>Please leave feedback</h1>
//                     {/* <div>
//                         <button onClick={this.countPositiveFeedback}>Good</button>
//                         <button onClick={this.countNeutralFeedback}>Neutral</button>
//                         <button onClick={this.countNegativeFeedback}>Bad</button>
//                     </div> */}
//                     {/* <div>
//                         <h2>Statistics</h2>
//                         <ul>
//                             <li>Good: {this.state.good}</li>
//                             <li>Neutral: {this.state.neutral}</li>
//                             <li>Bad: {this.state.bad}</li>
//                             <li>Total: {this.state.total}</li>
//                             <li>Positive Feedback: {this.state.goodPersent}%</li>
//                         </ul>
//                     </div> */}
//             </div>
//         )
//     }
// }


// updateFeedback = (feedbackType) => {
//         this.setState((prev) => {
//             const newFeedback = { ...prev, [feedbackType]: prev[feedbackType] + 1 };
//             const newTotal = prev.total + 1;
//             const newGoodPercent = newTotal > 0 ? Math.round((newFeedback.good / newTotal) * 100) : 0;

//             return {
//                 ...newFeedback,
//                 total: newTotal,
//                 goodPersent: newGoodPercent,
//             };
//         });
// }