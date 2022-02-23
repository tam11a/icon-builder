import * as React from "react";

const SvgServer = ({ title, titleId, ...props }) => (
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
      d="M136.45 120.107c0-.946-.233-1.492-1.101-1.997a53.78 53.78 0 0 0-10.949-4.733c-.776-.249-.889 0-1.025.66-.316 1.489-.691 2.959-1.066 4.433-2.704 10.554-8.015 19.29-17.559 25.039-2.84 1.71-5.818 3.099-9.115 3.685.344.474.293 1.023.293 1.562v12.984c0 2.711.01 5.422.032 8.131v.984c.018.246-.017.492-.101.723 2.243-.029 4.483-.06 6.723-.107 10.728-.225 21.497-.07 32.243-.016 1.316 0 1.641-.357 1.641-1.654a9461.504 9461.504 0 0 1-.016-49.694Zm-27.766 7.835c1.225 1.281 2.411 2.603 3.695 3.997.158-.177.268-.281.35-.397 4.055-5.696 6.188-12.151 7.418-18.947a1.859 1.859 0 0 0-.063-1.158c-.981-1.729-2.029-3.424-3.155-5.298a44.265 44.265 0 0 1-8.361 11.302c-.407.398-.426.849-.423 1.35v7.69a1.911 1.911 0 0 0 .533 1.461h.006Zm-12.75 7.01v6.894c0 .587-.053 1.177.284 1.704a28.614 28.614 0 0 0 12.261-7.064c2.099-2.013 2.149-1.262.038-3.635-.041-.044-.173 0-.378 0-.038.67-.038 1.343 0 2.013.132 1.171-.171 1.47-1.335.991-2.638-1.086-5.307-2.092-7.98-3.073-1.647-.606-3.35-.54-5.048-.19 2.152.114 2.152.114 2.152 2.36h.006Zm6.538-4.448c.344.183.741.268 1.095.435.836.394 1.278.29 1.224-.779-.06-1.133 0-2.266 0-3.395 0-1.035-.057-2.073.016-3.102.085-1.183-.19-1.486-1.347-.899-4.976 2.524-9.974 2.562-14.96-.019-.043-.022-.09-.038-.135-.063-.883-.461-1.29-.341-1.262.801.076 1.915.016 3.837.022 5.755 0 2.231 0 2.209 2.165 1.357 1.498-.596 2.937-1.417 4.58-1.54 2.976-.221 5.885.022 8.596 1.449h.006Zm-18.685-11.659a1.895 1.895 0 0 0-.596-1.577 44.47 44.47 0 0 1-8.204-11.126c-1.12 1.865-2.126 3.547-3.14 5.222a1.362 1.362 0 0 0-.122 1.004c1.205 6.701 3.287 13.068 7.156 18.754.441.653.65.767 1.372.145 2.84-2.455 4.171-5.395 3.553-9.178-.18-1.051-.057-2.162-.025-3.244h.006Zm-31.684 42.04v-39.667a2.699 2.699 0 0 0-.54.221c-7.333 6.051-12.072 13.463-12.119 23.291-.04 8.519 0 17.06-.044 25.589 0 .987.315 1.284 1.24 1.262 3.398-.032 6.8-.051 10.197 0 1.051 0 1.31-.379 1.288-1.382-.066-3.102-.022-6.209-.022-9.314Z"
      fill="#345585"
    />
    <path
      d="M136.473 169.809c0 1.297-.315 1.66-1.64 1.654-10.747-.054-21.5-.208-32.243.016-2.24.047-4.48.078-6.724.107.085-.231.12-.477.101-.723v-.984c-.019-2.714-.03-5.424-.031-8.131v-12.984c0-.539.05-1.088-.294-1.561 3.297-.587 6.282-1.976 9.115-3.686 9.545-5.748 14.855-14.485 17.559-25.039.376-1.474.764-2.944 1.067-4.433.135-.669.249-.909 1.025-.66a53.747 53.747 0 0 1 10.948 4.733c.868.505 1.102 1.063 1.102 1.997-.024 16.561-.018 33.126.015 49.694Z"
      fill="#390D72"
    />
    <path
      d="M95.961 170.859c.018.246-.016.492-.1.723-12.83.145-25.656 0-38.494.072-.562 0-1.19.221-1.691-.255a1.069 1.069 0 0 1-.284-.748c0-.161 0-.316.022-.467v-.338c0-16.564 0-33.129-.038-49.694 0-1.158.407-1.779 1.398-2.303a72.934 72.934 0 0 1 10.049-4.31c1.325-.454 1.675-.12 1.862 1.13a44.48 44.48 0 0 0 3.571 11.806c4.733 10.384 12.305 17.53 23.383 20.72.344.474.294 1.023.294 1.562v12.984c0 2.858 0 5.695.025 8.399 0 .243 0 .483.003.719Z"
      fill="#957CDA"
    />
    <path
      d="M155.77 145.704a35.234 35.234 0 0 0-.514-6.771c-1.411-7.228-5.175-13.144-10.482-18.111-5.884-5.505-12.955-8.872-20.625-11.087-.65-.186-1.288-.293-1.691-1.019-1.158-2.064-2.392-4.083-3.642-6.09-.375-.602-.34-.968.158-1.511a52.516 52.516 0 0 0 9.444-14.561c.173-.391.252-.811.776-.99 3.96-1.354 5.679-4.563 6.509-8.312.83-3.748.631-7.398-2.524-10.21-.527-.47-.316-.883-.145-1.31.587-1.514 1.17-3.031 1.852-4.505 3.095-6.701 3.272-13.41.082-20.12-1.164-2.455-2.739-4.664-4.212-6.942-3.275-5.048-7.847-8.184-13.681-9.57-3.114-.738-6.203-1.577-9.302-2.369a6.701 6.701 0 0 0-2.596-.975c-7.084-1.451-14.199-2.72-21.421-3.196-2.076-.136-4.222-.092-6.153.978a7.6 7.6 0 0 1-.798.37 14.005 14.005 0 0 0-7.534 5.865c-2.988 4.584-6.08 9.096-10.435 12.551-.327.3-.634.623-.918.965-4.78 4.938-5.843 10.491-2.912 16.805 1.243 2.676 2.682 5.263 3.695 8.046.57 1.562 1.375 3.035-.736 4.187-.744.403-1.06 1.391-1.385 2.208a11.301 11.301 0 0 0-.552 6.118c.735 4.2 2.316 7.888 6.793 9.393.521.174.657.552.83.947a52.01 52.01 0 0 0 9.185 14.04c.678.751.77 1.347.224 2.209a117.29 117.29 0 0 0-3.354 5.569 2.68 2.68 0 0 1-1.776 1.366c-5.68 1.603-11.09 3.815-15.934 7.222-10.23 7.2-16.256 16.653-15.987 29.583.154 7.689.028 15.385.028 23.08v5.405h8.715c36.54 0 73.081.013 109.62.038 1.221 0 1.42-.394 1.417-1.492-.041-9.261-.025-18.531-.019-27.804Zm-47.618-26.91c0-.502 0-.947.423-1.351a44.265 44.265 0 0 0 8.361-11.302c1.129 1.874 2.177 3.569 3.155 5.298.144.369.166.775.063 1.158-1.233 6.796-3.363 13.252-7.424 18.947-.082.116-.192.221-.35.397-1.284-1.394-2.471-2.716-3.695-3.997a1.925 1.925 0 0 1-.539-1.461c.022-2.565.012-5.127.006-7.689Zm-1.332 17.06c1.165.479 1.468.179 1.335-.991a17.787 17.787 0 0 1 0-2.013c.205 0 .338-.041.379 0 2.11 2.385 2.06 1.622-.038 3.635a28.621 28.621 0 0 1-12.286 7.067c-.38.12-.79.091-1.149-.079a32.05 32.05 0 0 1-12.785-7.947c-.54-.549-.587-.909-.025-1.433.429-.428.834-.879 1.215-1.35.391.123.315.35.315.527.044 3.051.041 3.044 2.963 1.94 2.341-.883 4.692-1.745 7.04-2.619 1.697-.35 3.4-.416 5.047.19 2.682.981 5.352 1.987 7.989 3.073Zm-2.022-12.189c-.073 1.029-.016 2.067-.016 3.102 0 1.129-.047 2.262 0 3.395.054 1.069-.388 1.173-1.224.779-.353-.167-.751-.252-1.095-.435-2.71-1.427-5.62-1.669-8.598-1.449-1.644.123-3.082.947-4.581 1.54-2.155.855-2.152.874-2.165-1.357 0-1.918.054-3.839-.022-5.755-.044-1.142.363-1.262 1.262-.801.045.025.092.041.136.063 4.985 2.581 9.983 2.524 14.959.019 1.155-.587 1.429-.284 1.344.899ZM66.058 83.38c-.315-.82-.596-1.423-1.646-1.108-.546.168-1.076-.063-1.55-.347-3.47-2.076-4.827-9.37-2.186-11.958a37.401 37.401 0 0 1 1.704 6.686c.192 1.145.545 1.578 1.754 1.52 2.401-.094 2.385-.021 2.47-2.448.165-4.382.53-8.746 1.509-13.04a6.099 6.099 0 0 1 2.435-3.84c4.118-3.041 7.377-6.809 8.889-11.838.23-.76.583-.84 1.293-.631 2.27.67 4.436 1.653 6.437 2.918 2.7 1.695 5.562 2.704 8.778 2.603v67.622a2.935 2.935 0 0 0 .29 1.578c-.732.221-1.341-.079-1.956-.423-7.504-4.174-13.047-10.223-16.96-17.814-.157-.3-.394-.675-.315-.947.413-1.814-.858-2.78-1.855-3.909a48.903 48.903 0 0 1-9.09-14.624Zm5.793 27.993c1.013-1.676 2.02-3.358 3.14-5.222a44.466 44.466 0 0 0 8.203 11.125 1.89 1.89 0 0 1 .597 1.578c-.032 1.082-.155 2.192.019 3.249.63 3.787-.704 6.724-3.553 9.179-.723.631-.93.508-1.373-.145-3.868-5.68-5.95-12.053-7.156-18.755a1.358 1.358 0 0 1 .124-1.009Zm-21.004 60.226c-3.398-.041-6.799-.022-10.197 0-.928 0-1.262-.287-1.24-1.262.047-8.519 0-17.06.044-25.589.047-9.828 4.786-17.24 12.12-23.291.17-.093.351-.167.539-.221v39.651c0 3.105-.044 6.212.022 9.317.022 1.003-.237 1.395-1.288 1.395Zm83.985-.123c-10.746-.054-21.499-.209-32.243.015-2.24.048-4.48.079-6.723.108-12.83.145-25.655 0-38.494.072-.561 0-1.19.221-1.69-.255a1.069 1.069 0 0 1-.285-.748 3.813 3.813 0 0 1 .022-.467v-.338c0-16.564 0-33.129-.038-49.694 0-1.158.407-1.779 1.398-2.303a73.087 73.087 0 0 1 10.05-4.323c1.325-.454 1.675-.12 1.861 1.13a44.494 44.494 0 0 0 3.572 11.807c4.733 10.383 12.305 17.53 23.383 20.72 3.297-.587 6.282-1.975 9.115-3.686 9.545-5.748 14.855-14.485 17.559-25.039.375-1.474.763-2.944 1.066-4.433.136-.669.249-.909 1.026-.66a53.795 53.795 0 0 1 10.948 4.733c.868.505 1.101 1.064 1.101 1.997-.025 16.565-.025 33.132 0 49.701.013 1.293-.312 1.656-1.628 1.65v.013Z"
      fill="#390D72"
    />
    <path
      d="M96.227 121.093c-.732.221-1.341-.079-1.957-.423-7.502-4.174-13.046-10.222-16.959-17.814-.157-.3-.394-.675-.315-.946.413-1.815-.858-2.78-1.855-3.91a48.905 48.905 0 0 1-9.068-14.608c-.316-.82-.597-1.423-1.647-1.108-.546.168-1.076-.063-1.55-.347-3.47-2.076-4.827-9.37-2.186-11.958a37.41 37.41 0 0 1 1.704 6.686c.192 1.145.546 1.578 1.754 1.52 2.401-.094 2.385-.021 2.47-2.448.165-4.382.53-8.746 1.509-13.04a6.1 6.1 0 0 1 2.436-3.84c4.117-3.041 7.376-6.809 8.888-11.838.23-.76.583-.84 1.293-.631 2.27.67 4.436 1.653 6.437 2.918 2.7 1.695 5.562 2.704 8.778 2.603v67.622a2.933 2.933 0 0 0 .268 1.562Z"
      fill="#FEE5C7"
    />
    <path
      d="M130.452 80.64c-.609.802-1.407 1.682-2.388 1.546-1.66-.23-1.919.76-2.376 1.893a47.863 47.863 0 0 1-9.847 15.313c-.572.599-.991 1.195-.871 2.069.079.565-.174 1.06-.429 1.543-3.891 7.358-9.273 13.302-16.562 17.42-.536.316-1.044.789-1.76.612a2.936 2.936 0 0 1-.29-1.577v-67.62c3.997-.397 7.322-2.47 10.727-4.328 2.171-1.183 4.344-2.3 6.919-2.297a7.832 7.832 0 0 1 4.042 1.205c5.01 2.95 7.329 7.355 7.257 13.123-.07 5.17.136 10.342.615 15.492l.028.444c.183 2.648.982 3.2 3.629 2.607.669-.149.656-.663.779-1.098.574-2.067 1.12-4.143 1.72-6.364.688.659.798 1.4.877 2.076a10.5 10.5 0 0 1-2.07 7.942Z"
      fill="#FFD29B"
    />
    <path
      d="M63.782 67.326c-1.451-4.897-3.966-9.318-5.995-13.943-2.029-4.626-.902-8.645 2.486-12.166 1.398-1.455 2.78-2.932 4.386-4.178 2.029-1.578 3.193-3.846 4.673-5.862.947-1.262 1.893-2.524 2.695-3.884 2.255-3.787 5.814-5.184 9.95-5.304 5.34-.155 10.58.826 15.808 1.76 6.147 1.102 12.224 2.525 18.275 4.077 4.948 1.262 8.91 3.786 11.738 8.09 1.596 2.43 3.265 4.818 4.433 7.49 1.861 4.266 2.164 8.652.741 13.113-1.262 3.928-3.42 7.516-4.206 11.62l-.574-.043c0-3.298.066-6.598-.016-9.895-.091-3.512-.823-6.916-3.133-9.661-3.105-3.685-6.67-6.784-11.914-6.705-2.78.041-5.247 1.193-7.654 2.467-1.784.947-3.572 1.893-5.364 2.84-3.689 1.93-7.257 1.7-10.769-.508-2.679-1.675-5.512-3.067-8.642-3.723a9.602 9.602 0 0 0-1.748-.227c-2.155-.048-2.227.113-2.565 2.208-.52 3.288-2.404 5.882-4.54 8.305-.884 1-1.83 1.984-2.982 2.634-2.777 1.559-3.786 4.127-4.313 7.03a783.132 783.132 0 0 1-.77 4.465Z"
      fill="#000"
    />
    <path
      d="M50.847 171.6c-3.398-.041-6.8-.022-10.198 0-.927 0-1.262-.287-1.24-1.262.048-8.519 0-17.06.044-25.589.048-9.828 4.787-17.24 12.12-23.291.17-.093.352-.167.539-.221v39.651c0 3.105-.044 6.213.022 9.317.022 1.004-.237 1.395-1.287 1.395ZM139.793 121.121a34.178 34.178 0 0 1 9.386 10.869c2.348 4.203 3.209 8.75 3.225 13.489.028 8.225 0 16.451.038 24.679 0 1.136-.35 1.401-1.426 1.386-3.345-.045-6.689 0-10.034.044-.871 0-1.262-.215-1.262-1.262.038-16.109.046-32.217.025-48.325.004-.218.019-.442.048-.88Z"
      fill="#fff"
    />
    <path
      d="M120.15 112.595c-1.234 6.796-3.364 13.251-7.424 18.946-.082.117-.193.221-.351.398-1.284-1.395-2.47-2.717-3.694-3.998a1.915 1.915 0 0 1-.54-1.46c.019-2.566 0-5.128 0-7.69 0-.501 0-.946.423-1.35a44.265 44.265 0 0 0 8.361-11.302c1.13 1.874 2.177 3.569 3.155 5.298.146.368.17.774.07 1.158ZM80.257 131.271c-.722.631-.93.508-1.372-.145-3.868-5.679-5.95-12.053-7.156-18.754a1.362 1.362 0 0 1 .123-1.004c1.013-1.675 2.02-3.357 3.14-5.222a44.453 44.453 0 0 0 8.203 11.126 1.896 1.896 0 0 1 .596 1.577c-.031 1.082-.154 2.193.02 3.25.617 3.777-.705 6.718-3.554 9.172Z"
      fill="#FEFEFE"
    />
    <path
      d="M104.786 130.161c.054 1.069-.388 1.174-1.224.779-.353-.167-.751-.252-1.095-.435-2.71-1.426-5.62-1.669-8.598-1.448-1.644.123-3.082.946-4.581 1.539-2.155.855-2.152.874-2.164-1.356 0-1.919.053-3.84-.023-5.756-.044-1.142.363-1.262 1.263-.801.044.025.09.041.135.063 4.985 2.581 9.983 2.524 14.959.019 1.158-.587 1.432-.284 1.347.899-.073 1.029-.016 2.067-.016 3.102-.016 1.129-.069 2.262-.003 3.395Z"
      fill="#000"
    />
    <path
      d="M108.472 136.491a28.63 28.63 0 0 1-12.274 7.065c-.338-.527-.284-1.117-.284-1.704v-6.894c0-2.247 0-2.247-2.145-2.364 1.697-.35 3.4-.416 5.048.19 2.672.981 5.342 1.988 7.979 3.073 1.165.479 1.468.18 1.335-.991a17.787 17.787 0 0 1 0-2.013c.205 0 .338-.041.379 0 2.11 2.389 2.06 1.625-.038 3.638Z"
      fill="#fff"
    />
    <path
      d="M96.203 143.549a1.58 1.58 0 0 1-1.149-.079 32.05 32.05 0 0 1-12.785-7.948c-.54-.549-.587-.908-.025-1.432.429-.428.834-.879 1.215-1.351.391.123.315.351.315.527.044 3.051.041 3.045 2.963 1.941 2.341-.884 4.692-1.745 7.04-2.619 2.145.117 2.145.117 2.145 2.363v6.894c.01.587-.035 1.177.28 1.704Z"
      fill="#fff"
    />
  </svg>
);

export default SvgServer;
