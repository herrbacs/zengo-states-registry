import './LoadingModal.css' 

export const LoadingModal = () => {
    return (
        <div className="helper-comp-loading-modal-container">
            <img className="helper-comp-loading-modal" src={process.env.PUBLIC_URL + '/other/loading.svg'} alt="" />
        </div>
    )
}
