import { BeatLoader } from "react-spinners";


const DivLoad = (props) => {
  const {loading} = props;

  return (
    <>
    {
      loading ? (
        <div className="loading-center">
          <BeatLoader size={20} color={"#007BFF"} loading={loading} />
        </div>
      ) : ''
    }
    </>
  )
}
export default DivLoad