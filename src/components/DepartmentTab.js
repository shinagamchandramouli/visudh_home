import React from 'react'

function DepartmentTab(props) {
    const dept_data = props.data;
    return (
        <div className={`tab-pane ${props.state === props.id ? 'active show' : ''}`} id={`tab-${props.id}`}>
            <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>{dept_data.title}</h3>

                    <p>{dept_data.description}</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={dept_data.imgPath.default} alt="" class="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default DepartmentTab
