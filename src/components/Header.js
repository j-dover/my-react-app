import { HamburgerIcon } from 'chakra-ui/icons'

export default function Header() {
  return (
    <header>
      <button>
        <HamburgerIcon />
      </button>
      <nav>
        <a href="#">GrateFull</a>
      </nav>
    </header>
  );
}