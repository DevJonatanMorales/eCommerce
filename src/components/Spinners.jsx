import React from 'react'

const Spinners = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 offset-4">
                    <div className="d-grid mx-auto">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spinners