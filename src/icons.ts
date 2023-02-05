/**
@license CC-BY-4.0 Font Awesome Free Icons: Copyright (c) 2022 Fonticons, Inc. (https://fontawesome.com)
@license OFL-1.1 Font Awesome Free Fonts: Copyright (c) 2022 Fonticons, Inc. (https://fontawesome.com)
@license MIT Font Awesome Free Code: Copyright (c) 2022 Fonticons, Inc. (https://fontawesome.com)
*/

import { dom, library } from "@fortawesome/fontawesome-svg-core";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faMastodon } from "@fortawesome/free-brands-svg-icons/faMastodon";

library.add(
    faGithub,
    faEnvelope,
    faTwitter,
    faMastodon,
    faBook,
    faMagnifyingGlass,
);

dom.i2svg();
