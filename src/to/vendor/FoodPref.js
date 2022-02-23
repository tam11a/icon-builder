import * as React from "react";

const SvgFoodPref = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m60.446 58.931-.112.102v-.237c.042.053.08.098.112.135ZM109.8 40.466l-.109.064a8.32 8.32 0 0 0-.27-.251c.131.06.259.124.379.187ZM125.891 117.9c-.04.143-.091.282-.153.416l-.023-.187.176-.229Z"
      fill="#D7EBFD"
    />
    <path
      d="M150.154 97.35a65.772 65.772 0 0 1-7.718 20.104 60.088 60.088 0 0 1-7.226 9.903c-2.381 2.607-4.778 5.25-7.781 7.2-.27-2.25-.574-4.526-.807-6.795-.322-3.146-.592-6.296-.885-9.446a8.71 8.71 0 0 0 1.643-1.706 44.426 44.426 0 0 0 5.25-45.566 43.405 43.405 0 0 0-9.165-13.1c.214.376.439.75.671 1.107a6.062 6.062 0 0 0-.75-.78l-.075-.094c-1.286-1.612-3.187-2.542-4.59-4.027a.332.332 0 0 1-.056-.064l.041-.056c-.375-3.375-.862-6.705-1.095-10.069-.27-3.937-5.092-6.206-8.19-3.682-1.594 1.125-2.201 2.67-2.25 4.563-.03 1.095.304 2.228-.24 3.29a.328.328 0 0 1 .023.052h-.09c-2.933-1.598-6.184-2.025-9.413-2.434A43.413 43.413 0 0 0 73.85 49.36a8.327 8.327 0 0 1-.998.375 2.818 2.818 0 0 1-.457-.191l-.312.03-3.61-.338c-1.568-.397-3.196-.322-4.77-.607-1.2-.218-1.8.292-2.022 1.32-.248 1.125-.315 2.284-.518 3.416-.318 1.804-.3 3.66-.82 5.434-.646-.278-.8.375-1.04.652-1.737 2.001-3.33 4.123-4.766 6.35-6.495 10.5-8.362 21.75-5.689 33.772 1.707 7.668 5.382 14.328 10.654 20.126-.506 4.151-.99 8.302-1.53 12.45-.476 3.634-1.016 7.26-1.526 10.875.034-.596-.353-.908-.788-1.211a56.967 56.967 0 0 1-9.836-8.46c-4.766-5.277-8.831-11.014-11.76-17.558a63.25 63.25 0 0 1-5.07-17.171A64.5 64.5 0 0 1 36 59.17a60.982 60.982 0 0 1 7.582-11.017 63.282 63.282 0 0 1 13.905-12.225c7.587-4.875 15.78-8.145 24.75-9.413 1.875-.262 3.728-.551 5.592-.825h8.7c1.057.608 2.268.375 3.375.491a62.949 62.949 0 0 1 34.215 15.353c.832.75 1.713 1.425 2.572 2.137-1.162 1.26-2.674 1.984-4.192 2.697-.334.157-.75.232-.795.678-.045.447.303.66.663.795 3.214 1.227 5.505 3.57 7.553 6.214.915 1.913 2.032 3.731 2.625 5.786.109.375.307.68.75.675.442-.003.589-.375.731-.72.293-.72.596-1.44.896-2.163a1.206 1.206 0 0 1 .604.75 58.635 58.635 0 0 1 5.625 21.877c.349 5.693.218 11.419-.997 17.089Z"
      fill="#D7EBFD"
    />
    <path
      d="M156 89.625c-.263 14.209-4.5 27.09-13.084 38.46A62.035 62.035 0 0 1 129 141.514c-.24.139-.491.258-.75.356-.473-2.415-.619-4.875-.829-7.309 3-1.953 5.4-4.593 7.781-7.2a60.036 60.036 0 0 0 7.227-9.903 65.77 65.77 0 0 0 7.717-20.104c1.215-5.67 1.335-11.396 1.016-17.1a58.635 58.635 0 0 0-5.625-21.878 1.202 1.202 0 0 0-.603-.75v-.018c.241-.826.635-1.6 1.162-2.28a68.44 68.44 0 0 1 6.225 12.96 61.634 61.634 0 0 1 3.116 13.548c.289 2.6.608 5.187.563 7.79Z"
      fill="#C4E2FF"
    />
    <path
      d="M122.078 168.727c1.875-1.391 3-3.142 2.726-5.583-.356-3.225-.72-6.45-1.065-9.675-.311-2.955-.593-5.91-.908-8.865-.337-3.132-.716-6.263-1.053-9.398-.319-2.951-.597-5.906-.919-8.857-.334-3.09-.705-6.173-1.046-9.259-.36-3.225-.713-6.451-1.058-9.679-.311-2.906-.604-5.812-.904-8.719a32.533 32.533 0 0 1 5.588-.596c.397 3.645.797 7.291 1.2 10.939.36 3.03.719 6.061 1.076 9.094l.023.187c.292 3.15.562 6.3.885 9.446.232 2.269.536 4.53.806 6.795.21 2.445.356 4.894.829 7.309.311 3.248.607 6.495.941 9.75.409 3.941.979 7.875 1.234 11.824.3 4.609-4.193 7.384-8.355 5.287Z"
      fill="#554E56"
    />
    <path
      d="M125.891 117.9c-.04.143-.091.282-.153.416l-.023-.187.176-.229Z"
      fill="#554E56"
    />
    <path
      d="M122.078 168.727c-1.834-.858-2.625-2.411-2.817-4.327-.592-5.448-1.183-10.899-1.773-16.354-.229-2.066-.293-4.155-.75-6.199-.315-4.785-.908-9.536-1.478-14.295a67.138 67.138 0 0 0-.795-7.027c-.551-7.125-1.451-14.19-2.209-21.281l5.292-.645.157.052.131.041c.3 2.907.593 5.813.904 8.719.34 3.225.693 6.451 1.058 9.679.341 3.086.712 6.169 1.046 9.259.322 2.951.6 5.906.919 8.857.337 3.135.716 6.266 1.053 9.398.315 2.955.597 5.91.908 8.865.345 3.225.709 6.45 1.065 9.675.289 2.441-.844 4.192-2.711 5.583Z"
      fill="#685E68"
    />
    <path
      d="M68.186 98.704h-.063l-.068.049c-.667.476-.675 1.248-.75 1.942-.281 2.224-.585 4.444-.874 6.664-2.42 18.515-4.865 37.026-7.335 55.534-.236 1.77-.978 3.18-2.542 4.125-.375.236-1.02.423-.698 1.125-1.852-1.332-2.23-3.214-1.957-5.322.502-3.832 1.035-7.661 1.53-11.497.375-2.768.682-5.543 1.02-8.318.51-3.626 1.05-7.252 1.526-10.875.54-4.147 1.024-8.298 1.53-12.45 0-.086.034-.168.049-.255.727-3.84 1.035-7.74 1.627-11.602.495-3.255.713-6.551 1.392-9.78v-.101c.029-.01.059-.017.09-.02 1.74-.393 3.412.237 5.11.428.061.025.12.054.177.087a.605.605 0 0 1 .12.093.412.412 0 0 1 .116.173Z"
      fill="#554E56"
    />
    <path
      d="M117.487 148.046a60.597 60.597 0 0 1-13.042 4.017c-2.831.517-5.689.813-8.557 1.095-3.158.248-6.331.206-9.48-.128-5.8-.49-11.5-1.806-16.928-3.907-.75-.293-1.478-.81-2.374-.555.289-1.002.079-2.089.518-3.064l.292.094A58.016 58.016 0 0 0 82.47 148.5c8.426.6 16.89-.399 24.945-2.944 3.105-.975 6.022-2.403 9.034-3.596l.303-.124c.443 2.055.507 4.144.735 6.21Z"
      fill="#C4E2FF"
    />
    <path
      d="M43.219 146.94c0 .506-.439.585-.75.716-3.93 1.68-6.109 4.875-7.613 8.681-.18.454-.138 1.148-.776 1.193-.795.056-.667-.773-.896-1.223-.623-1.245-1.181-2.52-1.77-3.78.881-1.875 1.125-4.181 3.54-5.058.75-.278.322-.795-.161-1.125-.807-.544-1.71-.979-2.108-1.962-.397-.982-.844-2.058-1.264-3.09.668-1.38 1.452-2.703 1.924-4.17.116-.375.191-.78.626-.832.57-.068.65.472.75.836a17.803 17.803 0 0 0 2.404 4.721 12.617 12.617 0 0 0 5.344 4.373c.337.142.746.229.75.72Z"
      fill="#FDA513"
    />
    <path
      d="M144.51 47.801c-2.4 1.04-3.375 3.03-4.061 5.322-.037.28-.139.55-.3.783l-.15-.187c-.026.112-.053.225-.075.337-2.048-2.643-4.339-4.987-7.553-6.213-.375-.135-.701-.375-.663-.795.037-.42.461-.522.795-.68 1.518-.712 3.03-1.435 4.192-2.695 1.369-.987 2.303-2.367 3.315-3.675.334.866.724 1.713.994 2.595a5.665 5.665 0 0 0 3.259 3.75c.765.34 1.305 1 .247 1.458Z"
      fill="#FDB441"
    />
    <path
      d="M154.875 47.171c0 .724-.75.75-1.23.96a15.861 15.861 0 0 0-7.538 7.204 6.883 6.883 0 0 0-1.162 2.28c-.3.724-.604 1.444-.896 2.164-.143.349-.259.712-.732.72-.472.007-.652-.297-.75-.675-.6-2.055-1.717-3.874-2.625-5.786.023-.113.049-.225.075-.338l.15.188a1.78 1.78 0 0 0 .3-.784c.683-2.291 1.662-4.283 4.062-5.322 1.057-.457.517-1.124-.248-1.454a5.671 5.671 0 0 1-3.259-3.75c-.27-.882-.66-1.73-.993-2.595.896-1.733 1.852-3.44 2.463-5.303.147-.45.248-.967.825-.982.578-.015.705.566.848.978a21.85 21.85 0 0 0 3.949 7.185 16.19 16.19 0 0 0 5.482 4.264c.529.233 1.309.236 1.279 1.046Z"
      fill="#FEA613"
    />
    <path
      d="M34.954 147.469c-2.408.877-2.66 3.169-3.54 5.059-1.553-2.153-3.41-3.957-5.914-4.977-.304-.123-.653-.24-.641-.637.01-.398.375-.484.67-.611 2.498-1.039 4.366-2.828 5.9-5.007.42 1.032.847 2.059 1.263 3.09.417 1.032 1.302 1.418 2.108 1.962.476.326.915.843.154 1.121Z"
      fill="#FDB441"
    />
    <path
      d="M81.375 51.308c0 1.5-.375 3-.574 4.477-.408 3.263-.843 6.521-1.27 9.78-.413 3.169-.93 6.326-1.227 9.506-.424 4.52-2.224 8.03-6.649 9.77-1.429.562-2.115 1.653-2.321 3.067-.255 1.743-.308 3.517-.623 5.25-.315 1.732-.255 3.57-.75 5.298a1.552 1.552 0 0 0-.176-.086c-1.699-.191-3.375-.821-5.111-.427a.375.375 0 0 0-.09.018c.33-2.77.607-5.55 1.005-8.31.337-2.35.049-4.185-2.085-5.853-2.629-2.048-3.66-5.048-3.203-8.453.53-3.949.964-7.909 1.47-11.861.192-1.481.548-2.948.563-4.448l.112-.1a1.34 1.34 0 0 0-.112-.136c.521-1.774.502-3.63.821-5.434.203-1.125.27-2.29.518-3.416.22-1.027.82-1.537 2.02-1.32 1.576.285 3.203.21 4.77.608a.679.679 0 0 0-.445.24.562.562 0 0 0-.105.285 445.06 445.06 0 0 1-.574 4.417c-.51 3.863-1.031 7.725-1.5 11.591-.27 2.164-.705 4.31-.728 6.5 0 1.15.582 1.814 1.744 1.975a2.085 2.085 0 0 0 2.4-1.477c.263-.724.24-1.553.345-2.336.51-3.863 1.073-7.722 1.5-11.592.338-2.977 1.058-5.917.998-8.936v-.33l.31-.03c.147.077.3.141.458.191 1.212.42 2.558.173 3.75.65l-.045.322c-.375 2.602-.727 5.205-1.08 7.803-.542 4-1.078 8-1.608 12-.117.874-.26 1.744-.334 2.625a2.153 2.153 0 0 0 1.841 2.25c1.568.158 2.404-.626 2.625-2.358.428-3.402.896-6.8 1.331-10.2.495-3.86.968-7.718 1.448-11.58l.034-.285h.555c-.008.108-.008.228-.008.345Z"
      fill="#E2DEE2"
    />
    <path
      d="m114.48 120.525-.319.199c-2.025 1.252-3.99 2.625-6.101 3.686-7.095 3.577-14.584 5.306-22.597 4.875A46 46 0 0 1 70.53 126l-.345-.139 1.226-9.791c.698-5.523 1.394-11.045 2.09-16.568 0-.04 0-.082.018-.123.375-2.625.851-5.213 1.08-7.838.225-2.539.87-4.56 3.577-5.527 2.044-.728 3.375-2.378 4.377-4.305 1.27-2.434 1.2-5.123 1.6-7.718.492-3.157.833-6.334 1.257-9.502.506-3.75 1.05-7.5 1.541-11.28.124-.945-.46-1.5-1.32-1.692-1.402-.3-2.808-.618-4.263-.566h-.555a15.176 15.176 0 0 0-4.208-.559c-1.204-.476-2.55-.228-3.75-.648a8.3 8.3 0 0 0 .998-.375 43.413 43.413 0 0 1 23.59-3.62c3.23.41 6.481.837 9.413 2.435h.068c-.079 2.355-.113 4.706-.244 7.065-.21 3.75-.375 7.526-.585 11.29-.292 4.835-.375 9.68-.611 14.517-.116 2.329.862 3.956 2.666 5.355 1.414 1.095 2.963 2.25 3.206 4.241.353 2.824.608 5.66.904 8.49v.098c.769 7.095 1.669 14.171 2.22 21.285Z"
      fill="#B3DAFE"
    />
    <path
      d="M106.946 48.184h-.09c-2.932-1.598-6.184-2.025-9.412-2.434a43.414 43.414 0 0 0-23.603 3.611 8.304 8.304 0 0 1-.997.375 2.827 2.827 0 0 1-.458-.19c3.207-1.377 6.439-2.675 9.867-3.425a44.335 44.335 0 0 1 14.25-.836c3.137.316 6.234.945 9.247 1.875.514.161 1.151.218 1.177.983a.225.225 0 0 1 .019.04Z"
      fill="#B2D9FD"
    />
    <path
      d="M63.578 89.647c-.398 2.76-.675 5.54-1.005 8.31v.102c-.68 3.228-.897 6.525-1.392 9.78-.592 3.862-.9 7.762-1.627 11.602 0 .086-.034.169-.049.255-5.272-5.797-8.947-12.457-10.654-20.126-2.673-12-.806-23.276 5.69-33.773a55.883 55.883 0 0 1 4.765-6.348c.24-.29.375-.93 1.04-.653v.24c0 1.5-.376 2.966-.563 4.448-.507 3.952-.942 7.912-1.47 11.86-.47 3.406.562 6.406 3.187 8.45 2.126 1.668 2.415 3.502 2.078 5.853Z"
      fill="#B3DAFE"
    />
    <path
      d="m60.446 58.931-.112.102v-.237c.042.053.08.098.112.135Z"
      fill="#B2D9FD"
    />
    <path
      d="m60.446 58.931-.112.102v-.237c.042.053.08.098.112.135Z"
      fill="#E1DDE1"
    />
    <path
      d="M117.817 97.819a1.426 1.426 0 0 1-.198.641 1.148 1.148 0 0 0-.057.139l-5.291.645v-.098c-.296-2.831-.551-5.666-.904-8.49-.243-1.991-1.792-3.146-3.206-4.241-1.804-1.399-2.782-3.026-2.666-5.355.24-4.838.319-9.683.611-14.516.229-3.75.375-7.53.585-11.291.131-2.36.165-4.71.244-7.066h.022a.327.327 0 0 0-.022-.052c.544-1.061.21-2.194.24-3.289.056-1.875.664-3.457 2.25-4.563.094.082.184.168.27.25 1.755 1.692 2.58 3.728 2.625 6.263.03 1.834.375 3.687.547 5.535.3 3.233.709 6.45 1.062 9.679.315 2.902.615 5.809.93 8.715.337 3.086.705 6.172 1.027 9.263.323 3.09.578 6.097.908 9.142.307 2.895.693 5.79 1.023 8.689Z"
      fill="#E2DEE2"
    />
    <path
      d="M106.946 48.184h-.022v-.057a.288.288 0 0 1 .022.057ZM109.8 40.466l-.109.064a8.32 8.32 0 0 0-.27-.251c.131.06.259.124.379.187Z"
      fill="#E1DDE1"
    />
    <path
      d="M131.812 89.858a42.592 42.592 0 0 1-3.641 13.267c-.881 1.95-1.676 3.979-3.187 5.569a8.017 8.017 0 0 1-.345.345c-.403-3.645-.803-7.291-1.2-10.939v-.12c-.199-2.13-.375-4.26-.597-6.375-.333-3.176-.712-6.349-1.057-9.525-.311-2.903-.589-5.809-.9-8.711-.443-4.095-.893-8.192-1.35-12.289-.255-2.306-.533-4.612-.803-6.915 1.403 1.5 3.304 2.415 4.59 4.028-.255.543.402.843.615 1.147a45.781 45.781 0 0 1 5.142 9.585c2.655 6.735 3.446 13.755 2.733 20.933Z"
      fill="#B3DAFE"
    />
    <path
      d="M124.125 59.051a6.068 6.068 0 0 0-.75-.78l-.075-.094c-1.286-1.612-3.187-2.542-4.59-4.027a.276.276 0 0 1-.056-.064l.041-.056c1.748 1.125 3.476 2.25 4.759 3.915.225.375.45.742.671 1.106Z"
      fill="#B2D9FD"
    />
    <path
      d="M123.439 98.096a32.523 32.523 0 0 0-5.588.596l-.131-.04-.158-.053a1.15 1.15 0 0 1 .057-.139c.116-.195.184-.415.198-.641-.33-2.899-.716-5.794-1.035-8.693-.33-3.045-.588-6.097-.907-9.142-.319-3.045-.69-6.176-1.028-9.263-.315-2.906-.615-5.812-.93-8.715-.352-3.228-.75-6.446-1.061-9.678-.169-1.85-.517-3.702-.547-5.536-.038-2.535-.863-4.57-2.625-6.262l.108-.064a8.4 8.4 0 0 0-.375-.187c3.098-2.524 7.92-.255 8.19 3.682.233 3.375.72 6.713 1.095 10.069l-.041.056a.332.332 0 0 0 .056.064c.27 2.303.548 4.609.803 6.915.457 4.095.907 8.191 1.35 12.289.311 2.902.589 5.808.9 8.711.345 3.176.724 6.349 1.057 9.525.225 2.126.398 4.256.597 6.375l.015.131Z"
      fill="#CBC4CC"
    />
    <path
      d="m109.8 40.466-.109.064a8.32 8.32 0 0 0-.27-.251c.131.06.259.124.379.187ZM118.721 54.15a.332.332 0 0 1-.056-.064l.041-.056c.004.041.008.078.015.12Z"
      fill="#CAC3CB"
    />
    <path
      d="M132.836 107.347a44.253 44.253 0 0 1-5.456 9.278 8.71 8.71 0 0 1-1.643 1.706 2.66 2.66 0 0 0 .154-.416l-.176.229c-.36-3.03-.719-6.062-1.076-9.094.12-.113.236-.229.345-.345 1.5-1.59 2.306-3.619 3.187-5.569a42.596 42.596 0 0 0 3.641-13.263c.713-7.178-.078-14.198-2.745-20.948a45.821 45.821 0 0 0-5.141-9.585c-.214-.304-.87-.604-.615-1.148l.075.094c.273.238.524.499.75.78-.232-.375-.457-.731-.671-1.106a43.404 43.404 0 0 1 9.165 13.099 44.25 44.25 0 0 1 .206 36.303v-.015Z"
      fill="#A1D3FE"
    />
    <path
      d="M123.465 57.945c.214.375.439.75.671 1.106a6.062 6.062 0 0 0-.75-.78l-.075-.094c.041-.084.092-.162.154-.232ZM125.891 117.9c-.04.143-.091.282-.153.416l-.023-.187.176-.229Z"
      fill="#89C8FD"
    />
    <path
      d="M72.086 49.901c.06 3.019-.66 5.959-.997 8.936-.435 3.87-.998 7.73-1.5 11.592-.105.783-.083 1.612-.345 2.336a2.085 2.085 0 0 1-2.4 1.477c-1.163-.16-1.755-.825-1.744-1.976.023-2.19.458-4.335.728-6.499.487-3.866 1.008-7.728 1.5-11.59.19-1.475.374-2.945.573-4.418a.562.562 0 0 1 .105-.285.679.679 0 0 1 .447-.24l3.61.337.023.33Z"
      fill="#B5ADB6"
    />
    <path
      d="m116.753 141.847-.304.124c-3 1.193-5.929 2.625-9.034 3.596A67.02 67.02 0 0 1 82.47 148.5a57.982 57.982 0 0 1-14.554-2.914l-.292-.094c.199-3.435.844-6.813 1.249-10.226.284-2.396.678-4.777 1.023-7.17.093.006.185.023.274.053l.071.041a44.694 44.694 0 0 0 19.692 5.741c5.28.319 10.466-.487 15.54-2.025 3.333-1.012 6.375-2.625 9.465-4.192l.337-.173c.57 4.77 1.163 9.521 1.478 14.306Z"
      fill="#D8ECFE"
    />
    <path
      d="M86.951 53.213c-.491 3.75-1.035 7.5-1.541 11.28-.424 3.168-.75 6.345-1.256 9.502-.401 2.595-.33 5.284-1.602 7.718-1.005 1.927-2.332 3.577-4.376 4.305-2.707.967-3.352 3-3.577 5.527-.229 2.625-.709 5.228-1.08 7.838h-.053a10.012 10.012 0 0 0-5.28-.66.412.412 0 0 0-.116-.158.608.608 0 0 0-.12-.094c.506-1.728.439-3.543.75-5.298s.375-3.503.623-5.25c.206-1.414.892-2.505 2.32-3.068 4.426-1.74 6.226-5.25 6.65-9.769.296-3.18.813-6.337 1.226-9.506.427-3.259.862-6.517 1.271-9.78.188-1.5.566-2.962.574-4.477v-.353c1.455-.052 2.861.266 4.263.566.863.17 1.448.732 1.324 1.677Z"
      fill="#CBC4CC"
    />
    <path
      d="M73.519 99.375c0 .041 0 .082-.019.124-.697 5.522-1.394 11.045-2.089 16.567l-1.226 9.791c-.116.75-.435 1.467-.289 2.25-.345 2.393-.75 4.774-1.023 7.17-.405 3.413-1.05 6.792-1.25 10.227-.438.975-.228 2.062-.517 3.063-.69 5.34-1.312 10.692-2.096 16.017-.66 4.5-5.396 6.288-9.165 3.585-.322-.717.311-.904.698-1.125 1.563-.949 2.306-2.359 2.542-4.125 2.458-18.5 4.903-37.012 7.335-55.534.289-2.22.593-4.44.874-6.664.086-.694.094-1.466.75-1.943l.067-.048h.064a10.012 10.012 0 0 1 5.291.645h.053Z"
      fill="#554E56"
    />
    <path
      d="m115.275 127.552-.337.173c-3.079 1.564-6.132 3.18-9.465 4.192-5.074 1.538-10.26 2.344-15.54 2.025a44.694 44.694 0 0 1-19.692-5.741l-.07-.041a1.065 1.065 0 0 0-.275-.053c-.146-.776.173-1.5.29-2.25l.344.139a45.993 45.993 0 0 0 14.933 3.274c8.013.439 15.502-1.29 22.597-4.875 2.111-1.065 4.076-2.434 6.101-3.686l.319-.199c.389 2.332.654 4.682.795 7.042Z"
      fill="#8AC9FE"
    />
    <path
      d="m80.813 50.94-.034.285c-.48 3.862-.953 7.721-1.448 11.58-.435 3.401-.903 6.799-1.33 10.2-.218 1.732-1.055 2.516-2.626 2.359a2.153 2.153 0 0 1-1.841-2.25c.075-.878.217-1.748.334-2.625.535-4 1.07-8 1.608-12 .353-2.6.72-5.202 1.08-7.804l.045-.323a15.177 15.177 0 0 1 4.212.578Z"
      fill="#B5ADB6"
    />
  </svg>
);

export default SvgFoodPref;