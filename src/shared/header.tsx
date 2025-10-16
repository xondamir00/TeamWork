import React, { useState } from "react"
import {
  Button,
} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "./modeToggle"
import { Highlighter, Menu } from "lucide-react"

export function Header() {
  const [position, setPosition] = React.useState("bottom")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white dark:bg-black dark:border-neutral-800 transition-colors duration-300 border-b">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex-shrink-0">
            <img
              className="rounded-full w-[100px] h-10 object-contain"
              src="https://cdn.prod.website-files.com/61b372525d9e220633140352/6313d097695072614d9b202a_F1TV_Logo.png"
              alt="FIA Logo"
            />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="font-semibold">
                Race Series
              </Button>
            </DropdownMenuTrigger>
            <AnimatePresence>
              <DropdownMenuContent
                asChild
                sideOffset={5}
                className="w-56"
              >
                <motion.div
                  initial={{ opacity: 0, translateY: -8 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownMenuLabel>F1 RACE ACADEMY</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">F1</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">F2</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">F3</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </motion.div>
              </DropdownMenuContent>
            </AnimatePresence>
          </DropdownMenu>
        </div>
        <nav className="hidden md:flex items-center gap-5">
          <NavLink href="https://www.f1authentics.com/" label="Authentics" />
          <NavLink href="https://f1store.formula1.com" label="Store" />
          <NavLink href="https://tickets.formula1.com" label="Tickets" />
          <NavLink href="https://tickets.formula1.com/en/h-formula1-hospitality" label="Hospitality" />
          <NavLink href="https://f1experiences.com" label="Experiences" />
          <Separator orientation="vertical" className="h-5 bg-gray-400 dark:bg-gray-600" />
          <a href="https://f1tv.formula1.com" target="_blank" rel="noreferrer" className="flex items-center">
            <img
              className="w-20 h-10 object-contain"
              src="https://cdn.prod.website-files.com/61b372525d9e220633140352/6313d097695072614d9b202a_F1TV_Logo.png"
              alt="F1 TV"
            />
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <Link to="/subscribe-to-f1-tv">
            <Button
              variant="default"
              size="sm"
              className="rounded-3xl px-3 py-2"
            >
              Subscribe
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton>
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-3xl px-4 py-2 transition-colors duration-200">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <ModeToggle />
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <Highlighter size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800"
          >
            <div className="flex flex-col px-4 py-3 space-y-3">
              <NavLink href="https://www.f1authentics.com/" label="Authentics" />
              <NavLink href="https://f1store.formula1.com" label="Store" />
              <NavLink href="https://tickets.formula1.com" label="Tickets" />
              <NavLink href="https://tickets.formula1.com/en/h-formula1-hospitality" label="Hospitality" />
              <NavLink href="https://f1experiences.com" label="Experiences" />
              <Separator orientation="horizontal" className="my-2" />
              <a href="https://f1tv.formula1.com" target="_blank" rel="noreferrer" className="flex items-center">
                <img
                  className="w-20 h-10 object-contain"
                  src="https://cdn.prod.website-files.com/61b372525d9e220633140352/6313d097695072614d9b202a_F1TV_Logo.png"
                  alt="F1 TV"
                />
              </a>
              <Link to="/subscribe-to-f1-tv">
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-3xl px-3 py-2 w-full mt-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Subscribe
                </Button>
              </Link>
              <div className="flex justify-between items-center mt-3">
                <SignedOut>
                  <SignInButton>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white rounded-3xl px-4 py-2 transition-colors duration-200 w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      SignIn
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>

                <ModeToggle />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
function NavLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-semibold uppercase text-neutral-700 dark:text-neutral-200 hover:underline transition-colors duration-150"
    >
      {label}
    </a>
  )
}
