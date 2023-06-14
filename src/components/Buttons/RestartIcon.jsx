const RestartIcon = (props) => {
    return (
        <svg
            width={96}
            height={96}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <path
                transform="matrix(1 0 0 -1 0 96)"
                fill="url(#prefix__pattern0)"
                d="M0 0h96v96H0z"
            />
            <defs>
                <pattern
                    id="prefix__pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                <use xlinkHref="#prefix__image0_405_45" transform="scale(.01042)" />
                </pattern>
                <image
                    id="prefix__image0_405_45"
                    width={96}
                    height={96}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
  }
  
  export default RestartIcon;