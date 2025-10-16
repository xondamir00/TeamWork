import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Timer {
  hours: number
  minutes: number
  seconds: number
}

interface Country {
  code: string
  name: string
  flag: string
  deadline: Date
  teamName: string
  teamLogo: string
}

const countries: Country[] = [
  {
    code: "us",
    name: "United States",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1235px-Flag_of_the_United_States.svg.png",
    deadline: new Date(Date.now() + 28 * 3600 * 1000 + 46 * 60 * 1000 + 6 * 1000),
    teamName: "Red Bull Racing",
    teamLogo:
      "https://i.pinimg.com/originals/62/16/df/6216dff035f566b5ff43f2a4eac55f32.png",
  },
  {
    code: "gb",
    name: "United Kingdom",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png",
    deadline: new Date(Date.now() + 25 * 3600 * 1000 + 10 * 60 * 1000 + 0),
    teamName: "Mercedes AMG",
    teamLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1200px-Mercedes-Logo.svg.png",
  },
  {
    code: "fr",
    name: "France",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_France.png/1280px-Flag_of_France.png",
    deadline: new Date(Date.now() + 30 * 3600 * 1000 + 0 * 60 * 1000 + 0),
    teamName: "Alpine F1 Team",
    teamLogo:
      "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1f/Alpine.svg/1200px-Alpine.svg.png",
  },
  {
    code: "de",
    name: "Germany",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    deadline: new Date(Date.now() + 20 * 3600 * 1000 + 30 * 60 * 1000 + 0),
    teamName: "Aston Martin",
    teamLogo:
      "https://crystalpng.com/wp-content/uploads/2025/08/Aston-Martin-01.png",
  },
  {
    code: "it",
    name: "Italy",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png",
    deadline: new Date(Date.now() + 35 * 3600 * 1000 + 15 * 60 * 1000 + 0),
    teamName: "Ferrari",
    teamLogo:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c0/Scuderia_Ferrari_Logo.svg/887px-Scuderia_Ferrari_Logo.svg.png",
  },
]

function getTimeRemaining(target: Date): Timer {
  const now = new Date()
  const diff = Math.max(target.getTime() - now.getTime(), 0)
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { hours, minutes, seconds }
}

const timerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
}

export function RaceStatusBar() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0])
  const [timer, setTimer] = useState<Timer>(getTimeRemaining(selectedCountry.deadline))

  useEffect(() => {
    setTimer(getTimeRemaining(selectedCountry.deadline)) // reset timer on country change

    const interval = setInterval(() => {
      setTimer(getTimeRemaining(selectedCountry.deadline))
    }, 1000)

    return () => clearInterval(interval)
  }, [selectedCountry])

  return (
    <div className="w-full bg-white dark:bg-black border-b border-surface-neutral-4 ">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Select
            value={selectedCountry.code}
            onValueChange={(value) => {
              const country = countries.find((c) => c.code === value)
              if (country) setSelectedCountry(country)
            }}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  <div className="flex items-center gap-2">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-5 h-5 rounded object-cover"
                    />
                    <span>{country.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={selectedCountry.code}
              src={selectedCountry.flag}
              alt={selectedCountry.name}
              className="w-6 h-6 object-cover rounded"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <motion.span
            key={selectedCountry.code + "-name"}
            className="text-sm font-semibold text-muted-foreground dark:text-white"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInUp}
          >
            {selectedCountry.name}
          </motion.span>

          <svg
            className="w-4 h-4 text-muted-foreground dark:text-gray-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13.2 12.123l-4.6-4.6 1.4-1.4 6 6-6 6-1.4-1.4z" />
          </svg>
        </div>
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <motion.span
            key={selectedCountry.code + "-session"}
            className="text-sm font-bold uppercase text-muted-foreground dark:text-gray-200"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInUp}
          >
            FP1
          </motion.span>
          <Separator
            orientation="vertical"
            className="h-5 bg-surface-neutral-2 dark:bg-neutral-700"
          />
          <motion.div
            key={selectedCountry.code + "-timer"}
            className="text-sm font-mono text-muted-foreground dark:text-gray-200 flex items-baseline gap-1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={timerVariants}
          >
            <motion.span
              key={timer.hours}
              className="font-bold"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {String(timer.hours).padStart(2, "0")}
            </motion.span>
            <span className="text-xs">H</span>
            <motion.span
              key={timer.minutes}
              className="font-bold"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {String(timer.minutes).padStart(2, "0")}
            </motion.span>
            <span className="text-xs">M</span>
            <motion.span
              key={timer.seconds}
              className="font-bold"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {String(timer.seconds).padStart(2, "0")}
            </motion.span>
            <span className="text-xs">S</span>
          </motion.div>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedCountry.teamName}
              className="flex items-center space-x-2 cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={selectedCountry.teamLogo}
                alt={selectedCountry.teamName}
                className="h-7 object-contain"
              />
              <span className="text-xs font-semibold text-muted-foreground dark:text-gray-200">
                {selectedCountry.teamName}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
