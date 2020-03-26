import React from 'react';

class OutPut extends React.Component{
constructor(props){
super(props);
this.state={
    results:props.results,
    close:props.close
}
}


render(){
return (
    <div>
        <button type="button" class="close" aria-label="Close" onClick={this.state.close}>
        <span aria-hidden="true">&times;</span>
        </button>
<h2>    
    Output results
</h2>
 {this.state.results.forEach(result => {
  return( <p>{result}c</p>);  
 })} 
    </div>

)

}

}
export default OutPut;