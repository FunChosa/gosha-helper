import { useState } from "react";
import "./Viewer.css";
import Close from "../../icons/close.svg";
// @ts-ignore
import useStore from "../../store";
import { toast } from "react-toastify";

const UrlSettings = () => {
  const { baseUrl, setBaseUrl, closeSettings } = useStore(
    (state: any) => state
  );

  const [urlTemplate, setUrlTemplate] = useState(baseUrl);
  const [generatedUrl, setGeneratedUrl] = useState(
    baseUrl.replace("{{branchNumber}}", "1754")
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value.replace("{{branchNumber}}", "1754");
    setUrlTemplate(e.target.value);
    setGeneratedUrl(newUrl);
  };

  return (
    <div className="url-settings__container">
      <div className="url-settings_header">
        <h1>Set URL template</h1>
        <img
          src={Close}
          alt="close"
          className="url-settings__close-icon"
          onClick={closeSettings}
        />
      </div>
      <label htmlFor="urlTemplate">
        Use{" "}
        <code>
          {"{{"}branchNumber{"}}"}
        </code>{" "}
        as a placeholder for the branch number
      </label>
      <input
        type="text"
        id="urlTemplate"
        placeholder="https://gitlab.example.com/project/env/{{branchNumber}}/..."
        value={urlTemplate}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "0.5rem 1rem",
          border: "1px solid var(--stroke-color)",
          borderRadius: "12px",
        }}
      />
      <h3>Example URL (branchNumber = 1754):</h3>
      {generatedUrl ? (
        <a href={generatedUrl} target="_blank" rel="noopener noreferrer">
          {generatedUrl}
        </a>
      ) : (
        <p>no template</p>
      )}
      <button
        className="url-settings__save-button"
        onClick={() => {
          setBaseUrl(urlTemplate);
          toast.success("URL template saved", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          closeSettings();
        }}
      >
        save
      </button>
    </div>
  );
};

export default UrlSettings;
