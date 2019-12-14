import React from 'react'
import { connect } from 'react-redux'
import { createSubject, getSubjects } from '../../store/index.js';
// import { Link } from 'react-router-dom';

const { Component } = React;

class _CreateSubject extends Component{
  constructor() {
    super();
    this.state = {
      subject: ''
    };
    this.createSubject = this.createSubject.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  async createSubject(ev) {
    ev.preventDefault()
    await this.props.createSubject(this.state)
    this.setState({
      subject: ''
    })
  }
  onChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render(){
    const {onChange, createSubject } = this
    const {subject} = this.props || []
    return (
      <form>
        <label>
          <input type = 'text' placeholder='Subject' name = 'subject' required onChange = {onChange}></input>
        </label>
        <button type = 'submit' onClick={createSubject}>ADD SUBJECT</button>
      </form>
    )
  }
}

// class _Subjects extends Component {
//   constructor() {
//     super();
//   }
//   async componentDidMount() {
//     await this.props.getSubjects()
//   }
//   render() {
//     const {subjects} = this.props
//     return (
//       <div>
//       {/* {
//         subjects.map(subject => subject.name)
//         } */}
//         {/* <ul>
//           {
//             subjects.map( (recipe, idx) => {
//               const user = users.find(user => user.id === recipe.userId)
//               let userName
//               if (user === undefined) {
//                 userName = 'no chef'
//               } else {
//                 userName = user.userName
//               } */}
//               {/* return ( */}
//                   <div id='flex'>
//                     <h1 key='name' id='subject'>{subjects.name}</h1>


//                     {/* <Link to={`/users/${recipe.userId}`} activeclassname="active" id='view'>View {userName}</Link>

//                     <Link to={`/recipes/${recipe.id}`} activeclassname="active" id='view'>View {recipe.name} Recipe</Link> */}
//                   </div>
//               {/* ); */}
//           {/* }
//         </ul> */}
//       </div>
//     );
//   };
// };

const mapStateToProps = ({ subject, subjects })=> ({ subject, subjects });

const mapDispatchToProps = (dispatch) => {
  return {
    createSubject: (subject)=> dispatch(createSubject(subject)),
    // getSubjects: () => dispatch(getSubjects())
     }
}

const CreateSubject = connect(mapStateToProps, mapDispatchToProps)(_CreateSubject)

// const Subjects = connect(mapStateToProps, mapDispatchToProps)(_Subjects)

export { CreateSubject }

