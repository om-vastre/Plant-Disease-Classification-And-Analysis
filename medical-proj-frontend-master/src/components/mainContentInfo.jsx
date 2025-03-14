const titlesCss = " mt-10 ml-10 text-3xl font-semibold text-main-title";
const title2Css = " mt-10 ml-12 text-xl font-semibold text-main-title";

const infoCss = "mt-4 ml-20 text-lg text-normal-text";
const imageCss =
  "min-h-64 max-h-64 max-w-96 mt-4 mb-2 rounded-md hover:transform shadow-2xl  hover:scale-105 transition-transform duration-300 ease-in-out ";
export default function Info(props) {
  const tempPesticides = props.pesticides.toString();
  const splitPesticides = tempPesticides.split("-");
  return (
    <div>
      <div className=" w-full flex flex-row mt-5  flex-wrap justify-around items-between">
        <img className={imageCss} src={props.img1url} alt="image-1" />
        <img className={imageCss} src={props.img2url} alt="image-1" />
        <img className={imageCss} src={props.img3url} alt="image-1" />
      </div>
      <div>
        <p className={titlesCss}>Description</p>
        <p className={infoCss}>{props.description}</p>
      </div>
      <div className="pb-20">
        <p className={titlesCss}>Pesticides</p>
        <p className={infoCss}>{splitPesticides[0]}</p>
        {splitPesticides.slice(1).map((str, index) => (
          <p className={infoCss} key={index}>
            {index + 1}
            {")"} &nbsp;
            {str}
          </p>
        ))}
      </div>
    </div>
  );
}
