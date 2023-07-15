import RickRollVideo from '../../images/Rick-Roll.mp4';
export default function RickRoll() {

    return (
        <>
            <video width="100%" height="100%" loop autoPlay playsInline>
                <source src={RickRollVideo} type="video/mp4" />
                Upgrade your browser &gt;:[
            </video> 
        </>
    )
}