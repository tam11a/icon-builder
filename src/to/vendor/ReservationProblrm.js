import * as React from "react";

const SvgReservationProblrm = ({ title, titleId, ...props }) => (
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
      d="M164.794 62.336H95.066c-.326 0-.652-.026-.978-.041 0 .071-.02.139-.03.206 0 8.85.007 17.701.022 26.554 0 .634.041 1.275.067 1.912h.034l-.034.034-.123.394v.495l.067 10.661v.461l-.341.488c.48.454.311 1.046.311 1.586v11.625c2.801 0 5.599 0 8.4.034.499 0 1.032-.139 1.5.225 2.059.484 3.308 1.856 3.323 3.904.042 6.115.042 12.23 0 18.345 0 2.062-1.227 3.416-3.297 3.937-1.203.476-2.459.173-3.686.21-2.073.06-4.151.03-6.225.041v22.418h58.369c2.171-.221 4.309-.503 6.206-1.77 4.125-2.741 6.949-6.27 7.26-11.419V62.284c-.371.018-.746.052-1.117.052Zm-19.151 76.268c-.023 2.962-1.748 4.687-4.725 4.698-5.7.02-11.399.02-17.097 0-2.91 0-4.638-1.717-4.653-4.623-.033-5.75-.033-11.5 0-17.25 0-2.91 1.728-4.609 4.646-4.624 5.75-.028 11.5-.028 17.25 0 2.88 0 4.571 1.77 4.594 4.684.022 2.913 0 5.79 0 8.688-.008 2.82.007 5.622-.015 8.427Zm0-35.805c-.023 2.662-1.785 4.383-4.422 4.395-5.885.022-11.77.022-17.655 0-2.58 0-4.354-1.692-4.38-4.283-.06-5.932-.06-11.865 0-17.797.023-2.667 1.789-4.305 4.478-4.324 2.94-.023 5.884 0 8.827 0 2.944 0 5.794-.019 8.689 0 2.655.022 4.436 1.702 4.459 4.354a1129.4 1129.4 0 0 1-.004 17.655h.008Z"
      fill="#C5E1E6"
    />
    <path
      d="M94.076 116.708a1.04 1.04 0 0 1-.097.112.68.68 0 0 1-.083-.101l.18-.011ZM145.65 130.196v8.408c-.022 2.962-1.747 4.687-4.725 4.698-5.7.02-11.399.02-17.096 0-2.91 0-4.639-1.717-4.654-4.623-.032-5.75-.032-11.5 0-17.25 0-2.91 1.729-4.609 4.646-4.624 5.75-.028 11.5-.028 17.25 0 2.88 0 4.572 1.77 4.594 4.684.023 2.913-.015 5.808-.015 8.707ZM145.635 102.799c-.022 2.662-1.785 4.383-4.421 4.395-5.885.022-11.77.022-17.655 0-2.58 0-4.354-1.692-4.38-4.283-.06-5.933-.06-11.865 0-17.797.022-2.667 1.789-4.306 4.477-4.324 2.94-.023 5.884 0 8.828 0 2.944 0 5.794-.019 8.689 0 2.655.022 4.436 1.702 4.458 4.353.05 5.885.052 11.77.004 17.656ZM165.911 62.284c-.375 0-.75.052-1.125.052h-69.72c-.326 0-.652-.026-.978-.041 0 .071-.02.139-.03.206h-.278c.025-.054.056-.105.09-.154a.903.903 0 0 1 .105-.138l.086-.09h.026c.56-.398 1.215-.375 1.857-.375h68.017c.709-.034 1.414-.042 1.95.54Z"
      fill="#C4E0E5"
    />
    <path
      d="M94.147 90.967c-.026-.637-.067-1.278-.067-1.912 0-8.85-.007-17.701-.022-26.554h-.278c-.517 0-1.031-.03-1.545-.03H22.301v-.037h-.022c-.27.322-.173.712-.173 1.076v87.87c0 4.17 1.541 7.605 4.5 10.5a13.3 13.3 0 0 0 8.824 3.945h58.646v-22.421c-.063 0-5.565-.072-8.25-.094-3.375-.026-4.953-1.616-4.957-4.995v-16.8c0-3 1.657-4.646 4.676-4.706 2.782-.057 5.569.131 8.347-.09h.18v-11.625c0-.54.17-1.125-.31-1.587l.34-.483v-.462l-.067-10.66v-.496l.124-.394-.012-.045ZM69 138.62c0 3-1.736 4.672-4.733 4.683-5.65.02-11.302.02-16.957 0-3.064 0-4.781-1.721-4.789-4.777a3195.27 3195.27 0 0 1 0-16.958c0-3.045 1.725-4.721 4.812-4.755h8.407c2.85 0 5.7-.018 8.55 0 3 .03 4.699 1.699 4.71 4.707.022 5.7.022 11.4 0 17.1Zm0-35.925c-.019 2.842-1.74 4.5-4.59 4.5H47.033c-2.727-.023-4.5-1.729-4.5-4.463-.033-5.837-.033-11.676 0-17.516.018-2.711 1.792-4.421 4.526-4.429 5.79-.02 11.582-.02 17.377 0 2.828 0 4.545 1.68 4.564 4.526.028 5.798.028 11.592 0 17.382Z"
      fill="#E7F0EF"
    />
    <path
      d="M69 138.619c0 3-1.736 4.672-4.733 4.684-5.65.02-11.302.02-16.957 0-3.064 0-4.781-1.722-4.789-4.778-.015-5.652-.015-11.305 0-16.957 0-3.045 1.725-4.722 4.812-4.755h8.407c2.85 0 5.7-.019 8.55 0 3 .03 4.699 1.698 4.71 4.706.022 5.7.022 11.4 0 17.1ZM69 102.694c-.019 2.842-1.74 4.5-4.59 4.5H47.032c-2.726-.023-4.5-1.729-4.5-4.463-.032-5.837-.032-11.676 0-17.516.02-2.711 1.793-4.421 4.527-4.428 5.79-.02 11.582-.02 17.377 0 2.828 0 4.545 1.68 4.564 4.526.027 5.797.027 11.591 0 17.381ZM94.058 62.501h-.278c-.517 0-1.031-.03-1.545-.03H22.301v-.037c.713-.608 1.579-.428 2.397-.428h67.244c.668 0 1.358-.07 1.928.35.066.043.13.092.188.145ZM94.076 116.708a1.04 1.04 0 0 1-.097.112.68.68 0 0 1-.083-.101l.18-.011Z"
      fill="#E6EFEE"
    />
    <path
      d="M165.911 44.726v17.955c-.375 0-.75.053-1.125.053h-69.72c-.326 0-.652-.027-.978-.042-.042-.03-.08-.063-.113-.093-.487-.458-.469-1.084-.469-1.692-.015-9.227-.015-18.458 0-27.693a2.812 2.812 0 0 1 .35-1.62l.078-.11c.298-.3.701-.473 1.125-.483 2.467-.067 4.935-.079 7.399 0 .28.022.55.116.783.274l.072.064c.633.577.573 1.372.577 2.13.019 3.555-.026 7.125.026 10.66.023 1.673.544 3.147 2.224 3.893 2.408 1.073 4.973-.566 5.025-3.273.075-3.75 0-7.5.03-11.22 0-.788-.071-1.61.6-2.224l.03-.019a2.778 2.778 0 0 1 1.586-.334h15.405a3.031 3.031 0 0 1 1.613.3c.75.62.66 1.5.664 2.322.02 3.637.02 7.273 0 10.908a3.696 3.696 0 0 0 1.368 3.08 3.553 3.553 0 0 0 5.584-1.71 7.12 7.12 0 0 0 .349-2.34v-9.93c0-.698-.049-1.407.356-2.037.054-.066.115-.126.18-.18.305-.24.686-.36 1.073-.341 4.383.03 8.797-.454 13.147.255 5.513.892 9.375 4.102 11.85 9.082.701 1.399.585 2.921.911 4.365Z"
      fill="#401B60"
    />
    <path
      d="M94.091 31.197V62.294c0 .072-.019.139-.03.206h-.277c-.518 0-1.032-.03-1.545-.03H22.3v-.037c0-6.06-.551-12.15.229-18.161.979-7.56 7.369-12.938 15-13.084 3.877-.071 7.759-.023 11.625-.026.667.562.547 1.35.555 2.081.019 3.375 0 6.724 0 10.084a5.355 5.355 0 0 0 .667 2.827c.84 1.384 2.562 2.104 3.972 1.714a3.578 3.578 0 0 0 2.625-3.551c.04-3.69 0-7.377.022-11.066 0-.724-.127-1.523.615-2.04H76.31c.716.532.588 1.323.596 2.05.026 3.728-.023 7.46.026 11.187a3.574 3.574 0 0 0 5.944 2.651c1.091-.885 1.369-2.175 1.372-3.521v-10.35c0-.75-.116-1.5.57-2.07l9.02.038h.254Z"
      fill="#461C72"
    />
    <path
      d="M145.65 130.196v8.408c-.022 2.962-1.747 4.687-4.725 4.698-5.7.02-11.399.02-17.096 0-2.91 0-4.639-1.717-4.654-4.623-.032-5.75-.032-11.5 0-17.25 0-2.91 1.729-4.609 4.646-4.624 5.75-.028 11.5-.028 17.25 0 2.88 0 4.572 1.77 4.594 4.684.023 2.913-.015 5.808-.015 8.707ZM145.635 102.799c-.022 2.662-1.785 4.383-4.421 4.395-5.885.022-11.77.022-17.655 0-2.58 0-4.354-1.692-4.38-4.283-.06-5.933-.06-11.865 0-17.797.022-2.667 1.789-4.306 4.477-4.324 2.94-.023 5.884 0 8.828 0 2.944 0 5.794-.019 8.689 0 2.655.022 4.436 1.702 4.458 4.353.05 5.885.052 11.77.004 17.656Z"
      fill="#1D4659"
    />
    <path
      d="M94.076 143.404s-5.565-.072-8.25-.094c-3.375-.026-4.954-1.616-4.957-4.995v-16.8c0-3 1.657-4.646 4.676-4.706 2.782-.057 5.569.131 8.347-.09a.68.68 0 0 0 .083.101c.2.133.424.224.66.266-.446.177-.626.581-.596 1.361.078 2.25 0 4.47 0 6.705a.401.401 0 0 0-.042.21h-.105l-4.552.042a102.645 102.645 0 0 0 0 9.24c1.532.022 3.066.041 4.601.056h.045v.022l.056.192c0 2.19.064 4.38-.018 6.566 0 .84.052 1.924.052 1.924Z"
      fill="#265C76"
    />
    <path
      d="M94.076 116.708a1.04 1.04 0 0 1-.097.112.68.68 0 0 1-.083-.101l.18-.011Z"
      fill="#265C76"
    />
    <path
      d="M107.284 139.215c0 2.062-1.226 3.416-3.296 3.937-1.204.477-2.46.173-3.687.21-2.073.06-4.151.03-6.225.042 0 0-.052-1.084-.022-1.875 0-.274.019-.548.026-.822v-.037c.03-1.403 0-2.805 0-4.211v-1.5l-.056-.192v-.022c0-.023 0 0 0 0h.101c1.245.019 2.498 0 3.75.067.686.027.998-.157.986-.922a230.176 230.176 0 0 1 0-7.661c0-.792-.337-.927-1.001-.9-1.249.045-2.494.037-3.75.052h-.094a.397.397 0 0 1 .041-.21v-2.089c0-1.188.023-2.373 0-3.562 0-.353 0-.701-.026-1.054-.01-.194 0-.389.026-.581a.904.904 0 0 1 .57-.78 1.739 1.739 0 0 1-.66-.266.962.962 0 0 0 .098-.113c2.801 0 5.599 0 8.4.034.499 0 1.031-.139 1.5.225 2.059.484 3.308 1.856 3.323 3.904.037 6.105.036 12.213-.004 18.326Z"
      fill="#1D4659"
    />
    <path
      d="M69 138.619c0 3-1.736 4.672-4.733 4.684-5.65.02-11.302.02-16.957 0-3.064 0-4.781-1.722-4.789-4.778-.015-5.652-.015-11.305 0-16.957 0-3.045 1.725-4.722 4.812-4.755h8.407c2.85 0 5.7-.019 8.55 0 3 .03 4.699 1.698 4.71 4.706.022 5.7.022 11.4 0 17.1ZM69 102.694c-.019 2.842-1.74 4.5-4.59 4.5H47.032c-2.726-.023-4.5-1.729-4.5-4.463-.032-5.837-.032-11.676 0-17.516.02-2.711 1.793-4.421 4.527-4.428 5.79-.02 11.582-.02 17.377 0 2.828 0 4.545 1.68 4.564 4.526.027 5.797.027 11.591 0 17.381Z"
      fill="#265C76"
    />
    <path
      d="M103.316 31.144c0-1.534 0-3.068.053-4.601.063-2.505 1.946-4.403 4.305-4.377 2.358.026 4.05 1.853 4.098 4.38.03 1.534.042 3.068.06 4.602l-.045 12.75c0 2.864-1.691 4.69-4.26 4.66-2.46-.026-4.125-1.9-4.155-4.664-.026-4.241-.037-8.494-.056-12.75Z"
      fill="#8CB8C3"
    />
    <path
      d="M130.429 31.151c.026-1.578.041-3.16.078-4.74.049-2.298 1.628-4.053 3.795-4.24a4.22 4.22 0 0 1 4.482 3.543c.341 1.796 0 3.623.18 5.43-.027 4.297-.034 8.599-.087 12.896-.033 2.625-1.691 4.444-4.005 4.534-2.478.098-4.353-1.665-4.387-4.237-.053-4.396-.041-8.79-.056-13.186Z"
      fill="#8DB8C3"
    />
    <path
      d="M84.832 31.162c-.018 4.339 0 8.681-.063 13.02-.05 3.51-3.514 5.543-6.375 3.788-1.388-.844-2.018-2.123-2.014-3.75V31.196c0-1.543.012-3.083.037-4.62.03-2.663 1.692-4.406 4.197-4.41 2.212 0 4.147 1.984 4.215 4.38.018 1.534-.004 3.079.003 4.616ZM57.66 31.204c0 4.294.026 8.584 0 12.877 0 2.678-1.688 4.47-4.125 4.5-2.438.03-4.219-1.796-4.264-4.402-.075-4.339-.067-8.678-.093-13.016.138-1.947-.237-3.92.266-5.85A4.331 4.331 0 0 1 54 22.178a4.05 4.05 0 0 1 3.6 3.986c.041 1.68.045 3.36.06 5.04Z"
      fill="#C4E0E5"
    />
    <path
      d="M127.571 130.05c0-1.309.019-2.625 0-3.922 0-.66.244-.912.904-.904 2.625.019 5.227.026 7.841 0 .75 0 .945.319.938 1.012a352.835 352.835 0 0 0 0 7.699c0 .72-.229.99-.968.979a274.433 274.433 0 0 0-7.699 0c-.832 0-1.042-.33-1.016-1.08.026-1.264 0-2.524 0-3.784Z"
      fill="#C3DFE4"
    />
    <path
      d="M132.521 89.205c1.257 0 2.517.034 3.773 0 .75-.026.96.251.949.971a281.43 281.43 0 0 0 0 7.688c0 .75-.263.956-.975.948-2.61-.03-5.219-.03-7.827 0-.682 0-.888-.247-.881-.9.023-2.625.026-5.22 0-7.83 0-.678.255-.888.908-.873 1.35.018 2.7-.004 4.053-.004Z"
      fill="#C4E0E5"
    />
    <path
      d="M98.865 133.875c0 .75-.3.949-.986.923-1.241-.053-2.494-.049-3.75-.068h-.06v-9.345h.056c1.249 0 2.494 0 3.75-.052.664-.027 1.016.108 1.001.9-.05 2.55-.053 5.097-.01 7.642Z"
      fill="#C5E1E6"
    />
    <path
      d="M94.08 125.385v9.345h-.116c-1.533-.015-3.067-.034-4.602-.056a108.507 108.507 0 0 1 0-9.24l4.553-.042h.157l.008-.007Z"
      fill="#E7F0EF"
    />
    <path
      d="M99.428 97.732c0 .75-.3.95-.987.923-1.24-.053-2.493-.049-3.75-.068h-.06V89.25h.042c1.248 0 2.493 0 3.75-.053.663-.026 1.016.11 1 .9-.032 2.538-.03 5.083.005 7.635Z"
      fill="#C5E1E6"
    />
    <path
      d="M55.759 134.895c-1.26 0-2.52-.034-3.78 0-.75.03-1.084-.195-1.073-1.016.041-2.565.034-5.134 0-7.699 0-.75.259-.979.979-.971 2.565.026 5.134.033 7.699 0 .832 0 1.016.341 1.008 1.091-.035 2.52-.035 5.04 0 7.56 0 .795-.266 1.072-1.057 1.042-1.252-.045-2.516-.007-3.776-.007Z"
      fill="#E5EEED"
    />
    <path
      d="M55.789 89.205c1.305 0 2.625.026 3.915 0 .671-.022.892.229.889.889a371.58 371.58 0 0 0 0 7.83c0 .667-.237.888-.897.885-2.655-.03-5.313-.023-7.968 0-.6 0-.818-.218-.814-.818.022-2.659.03-5.314 0-7.969 0-.75.375-.817.964-.81 1.3.004 2.606-.007 3.91-.007Z"
      fill="#E6EFEE"
    />
    <path
      d="M80.599 103.001c.146.327.187.687.375 1.005.61 1.159 1.57 1.875 2.868 1.875 3.59.049 7.182 0 10.774 0 .188-.21.131-.468.143-.712.037-1.073-.075-2.149.075-3.221 0-.094-.057-.139-.132-.173a1.693 1.693 0 0 1-1.08-.484 1.317 1.317 0 0 1-.11-1.678c.12-.165.275-.3.455-.395.162-.094.345-.143.514-.222a.42.42 0 0 0 .218-.22 4.815 4.815 0 0 0-.038-1.876.585.585 0 0 0-.311-.195c-.806-.262-1.095-.874-1.099-1.665v-5.434c.026-.75.319-1.327 1.08-1.582a.604.604 0 0 0 .349-.229c.07-.173.1-.36.086-.547v-4.774a.796.796 0 0 0-.146-.619 3.217 3.217 0 0 0-2.861 1.586c-2.53 4.08-5.05 8.168-7.557 12.263-1 1.624-1.995 3.255-3 4.875a6.613 6.613 0 0 0-.577 1.369l-.026 1.053Z"
      fill="#FCD735"
    />
    <path
      d="M94.601 96.908v1.957c.098.143.263.158.405.221.522.237.927.552.98 1.193a1.324 1.324 0 0 1-.826 1.384c-.131.067-.311.075-.375.251-.217.097-.187.292-.184.48v3.506c3.664 0 7.328.113 10.984-.022 2.524-.094 3.9-3 2.599-5.13l-4.2-6.825c-2.085-3.375-4.181-6.78-6.255-10.178-.724-1.181-1.699-1.875-3.128-1.875v6l.053.06c.153.076.313.14.476.191a1.256 1.256 0 0 1 .829 1.197c.015 2.047.015 4.095 0 6.142a1.298 1.298 0 0 1-.833 1.2 3.71 3.71 0 0 0-.476.191l-.049.057Z"
      fill="#DBBB2E"
    />
    <path
      d="M94.601 87.866c-.967.143-1.5.701-1.5 1.665v5.712c0 .963.514 1.522 1.5 1.665v-.027a.788.788 0 0 0 .154-.615v-7.759a.793.793 0 0 0-.154-.615v-.026Z"
      fill="#FEFEFE"
    />
    <path
      d="M94.785 101.914c.874-.191 1.343-.728 1.335-1.53-.007-.802-.517-1.335-1.5-1.519l-.206.079c.057.748.076 1.5.056 2.25a.946.946 0 0 0 .143.664l.172.056Z"
      fill="#DDD"
    />
    <path
      d="M94.598 101.876v-2.478c0-.173.07-.394-.2-.454a1.474 1.474 0 0 0 .2 2.932Z"
      fill="#FEFEFE"
    />
    <path
      d="M94.597 87.893v9a1.417 1.417 0 0 0 1.5-1.38c.023-2.078.023-4.155 0-6.233a1.403 1.403 0 0 0-1.5-1.387Z"
      fill="#DDD"
    />
  </svg>
);

export default SvgReservationProblrm;
