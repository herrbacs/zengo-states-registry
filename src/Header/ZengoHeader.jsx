import './ZengoHeader.css'

const ZengoHeader = () => {
    return (
        <div className="zengo-header">
            <img className="zengo-header-logo" src={process.env.PUBLIC_URL + '/header/zengo_logo.png'} alt="" />
        </div>
    )
}

export default ZengoHeader
