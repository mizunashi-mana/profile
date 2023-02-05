import { dom, library } from "@fortawesome/fontawesome-svg-core";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGitHub";
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
