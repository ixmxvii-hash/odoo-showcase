"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react"

const SWIPE_THRESHOLD = 50

const testimonials = [
  {
    quote: "We chose ICIT Solutions as our IT Solutions Provider 5 years ago because we wanted a one stop shop for all our IT needs whether it be hardware, software, cloud, etc. The ICIT Team is very friendly, accessible and responds whenever there's a problem, they always get us back up and running in as little time as possible.",
    author: "Shelly Lewis",
    role: "Owner",
    company: "Owings Lewis",
    rating: 5
  },
  {
    quote: "Partnering with ICIT was one of the best decisions we've made for our business. They've saved us valuable time by automating tasks we once handled manually, making our operations much more efficient and less stressful.",
    author: "Joe Brown",
    role: "Owner",
    company: "Carpet One",
    rating: 5
  },
  {
    quote: "We chose ICIT Solutions 10 years ago and the biggest benefit we've derived from the relationship is minimal downtime. Having the peace of mind that ICIT Solutions is there with us all the way to help us make the best decisions regarding technology to help us be more productive and grow our business. They always deliver out of the box solutions to fit our business needs, keeping us on the cutting edge.",
    author: "Saleh Cambias",
    role: "Operations Manager",
    company: "Cambias Insurance",
    rating: 5
  },
  {
    quote: "ICIT Solutions has been our IT Solutions Provider for over 2 years. We chose ICIT because we wanted to just go to a single provider for all our technology needs & since partnering with them, we no longer spend hours researching or coordinating with multiple vendors to solve problems.",
    author: "Lori Yeager",
    role: "IT Manager",
    company: "Paulson Enterprises",
    rating: 5
  },
  {
    quote: "As a long-standing client of ICIT, our relationship with them has remained constant, professional, and—more importantly—constantly improving.",
    author: "Joe Bodine",
    role: "",
    company: "",
    rating: 5
  },
  {
    quote: "Having ICIT as our managed service provider has allowed us to concentrate on other business-related activities since we know that our data is secure and that our network infrastructure is protected.",
    author: "Craig S",
    role: "CEO",
    company: "Montage Community Services",
    rating: 5
  }
]

const AUTO_PLAY_INTERVAL = 6000

export default function GeneralTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)

  const totalSlides = testimonials.length

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrentIndex(index)
  }, [])

  const next = useCallback(() => {
    goTo((currentIndex + 1) % totalSlides, 1)
  }, [currentIndex, totalSlides, goTo])

  const prev = useCallback(() => {
    goTo((currentIndex - 1 + totalSlides) % totalSlides, -1)
  }, [currentIndex, totalSlides, goTo])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [next, isPaused])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        next()
      } else {
        prev()
      }
    }
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  const testimonial = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Real feedback from Houston-area teams that implemented Odoo with ICIT
          </p>
        </motion.div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-2xl">
            {/* Hidden cards stacked in same grid cell to establish max height */}
            <div className="grid" aria-hidden="true">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="col-start-1 row-start-1 invisible bg-white rounded-2xl p-5 md:p-12"
                >
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 md:w-5 md:h-5" />
                    ))}
                  </div>
                  <blockquote className="text-base md:text-xl leading-relaxed mb-6 md:mb-8">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  <div className="border-t pt-4 md:pt-6 flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm md:text-base">{t.author}</div>
                      {t.role && <div className="text-xs md:text-sm">{t.role}</div>}
                      {t.company && <div className="text-xs md:text-sm mt-0.5">{t.company}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visible animated card positioned on top */}
            <div className="absolute inset-0">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                  className="bg-white rounded-2xl p-5 md:p-12 shadow-lg relative h-full"
                >
                  <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-16 md:h-16 text-orange-100" />

                  <div className="flex gap-1 mb-4 md:mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>

                  <blockquote className="text-slate-700 text-base md:text-xl leading-relaxed mb-6 md:mb-8 relative z-10 pr-6 md:pr-0">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  <div className="border-t border-slate-200 pt-4 md:pt-6 flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(testimonial.author)}`}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm md:text-base">
                        {testimonial.author}
                      </div>
                      {testimonial.role && (
                        <div className="text-orange-600 text-xs md:text-sm font-medium">
                          {testimonial.role}
                        </div>
                      )}
                      {testimonial.company && (
                        <div className="text-slate-500 text-xs md:text-sm mt-0.5">
                          {testimonial.company}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation: arrows + dots in one row on mobile, arrows on sides on desktop */}
          <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-14 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md md:shadow-lg flex items-center justify-center text-slate-400 hover:text-orange-600 hover:shadow-xl transition-all flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 md:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index, index > currentIndex ? 1 : -1)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className="group p-1"
                >
                  <div
                    className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 md:w-8 bg-orange-500"
                        : "w-2 md:w-2.5 bg-slate-300 group-hover:bg-orange-300"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-14 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md md:shadow-lg flex items-center justify-center text-slate-400 hover:text-orange-600 hover:shadow-xl transition-all flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 md:mt-16"
        >
          <p className="text-slate-600 text-base md:text-lg">
            You do not have to figure out implementation alone. We guide every phase.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
