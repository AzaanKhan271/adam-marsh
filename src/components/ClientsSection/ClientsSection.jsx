import "./clientsSection.css";

const ClientsSection = () => {
  return (
    <>
      <div className="clientsSecParent">
        <div className="clientSecText">
          Leading visual experience design for the NatWest Group apps, used 4.2
          billion times annually.
        </div>
        <div className="CSImgDiv">
          <img
            className="imgFull"
            src="https://static.wixstatic.com/media/f3f8a1_815d8ef4e94242febadf28e11022379d~mv2.png/v1/fill/w_1936,h_440,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f3f8a1_815d8ef4e94242febadf28e11022379d~mv2.png"
          />
          <img
            className="imgResp"
            src="https://static.wixstatic.com/media/f3f8a1_6a6a7d11be964adf8b3d6fd942246396~mv2.png/v1/fill/w_640,h_554,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f3f8a1_6a6a7d11be964adf8b3d6fd942246396~mv2.png"
          />
        </div>
        <div>
          <img
            width={50}
            height={50}
            src="https://static.wixstatic.com/media/07836f_448811526a0e4c75b34b93eefffca2d7~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/arrowgreen%2525403x_edited_edited.png"
          />
        </div>
      </div>
    </>
  );
};

export default ClientsSection;
