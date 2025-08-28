import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'General', path: '/' },
    { name: 'Who am I', path: '/about' },
    { 
      name: 'Relationship Therapy', 
      path: '/therapy',
      dropdown: [
        { name: 'What is relationship therapy', path: '/therapy' },
        { name: 'Feedback from clients', path: '/therapy/feedback' },
        { name: 'Family therapy', path: '/therapy/family' }
      ]
    },
    { 
      name: 'Resources', 
      path: '/resources',
      dropdown: [
        { name: 'Relating inspiration', path: '/resources/inspiration' },
        { name: 'Recommended reading', path: '/resources/reading' },
        { name: 'Inspiring videos', path: '/resources/videos' },
        { name: 'Links', path: '/resources/links' }
      ]
    },
    { name: 'Contact & NB info', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">Relating</h1>
              <p className="text-sm text-muted-foreground uppercase">strengthening relationships</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                      isActivePath(item.path) 
                        ? 'bg-primary/15 text-primary shadow-sm' 
                        : 'text-foreground hover:text-primary'
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56 bg-white/95 backdrop-blur-md border border-primary/10">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.path} asChild>
                        <Link 
                          to={dropdownItem.path}
                          className={`w-full px-3 py-2 text-sm rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                            location.pathname === dropdownItem.path ? 'bg-primary/15 text-primary' : ''
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                    isActivePath(item.path) 
                      ? 'bg-primary/15 text-primary shadow-sm' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-primary/10 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-medium text-primary">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-2 text-sm rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                            location.pathname === dropdownItem.path ? 'bg-primary/15 text-primary' : 'text-foreground'
                          }`}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm rounded-md transition-colors hover:bg-primary/10 hover:text-primary ${
                      isActivePath(item.path) ? 'bg-primary/15 text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}