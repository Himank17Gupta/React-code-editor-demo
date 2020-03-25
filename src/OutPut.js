import React from 'react';
function OutPut(props){

return (
    <div>
        <button type="button" class="close" aria-label="Close" onClick={props.close}>
        <span aria-hidden="true">&times;</span>
        </button>
<h2>    
    Output results
</h2>
    </div>
)


}

export default OutPut;