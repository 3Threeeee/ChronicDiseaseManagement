'use client'

import { useState } from 'react'

const PRESET_TIMES = ['08:00', '12:00', '18:00', '20:00']

interface TimePickerProps {
  value: string[]
  onChange: (times: string[]) => void
}

export default function TimePicker({ value, onChange }: TimePickerProps) {
  const [customTime, setCustomTime] = useState('')

  const toggleTime = (time: string) => {
    if (value.includes(time)) {
      onChange(value.filter((t) => t !== time))
    } else {
      onChange([...value, time])
    }
  }

  const addCustomTime = () => {
    if (!customTime) return
    if (!/^\d{2}:\d{2}$/.test(customTime)) return
    if (value.includes(customTime)) {
      setCustomTime('')
      return
    }
    const sorted = [...value, customTime].sort()
    onChange(sorted)
    setCustomTime('')
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {PRESET_TIMES.map((time) => {
          const selected = value.includes(time)
          return (
            <button
              key={time}
              type="button"
              onClick={() => toggleTime(time)}
              className={`text-2xl-patient px-5 py-3 rounded-xl font-bold transition-colors ${
                selected
                  ? 'bg-patient-primary text-white shadow-lg'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-patient-primary'
              }`}
            >
              {time}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="time"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          className="text-2xl-patient px-4 py-3 rounded-xl border-2 border-gray-300 bg-white flex-1 min-w-0 focus:border-patient-primary focus:outline-none"
          placeholder="自定义时间"
        />
        <button
          type="button"
          onClick={addCustomTime}
          disabled={!customTime}
          className="text-2xl-patient px-5 py-3 rounded-xl bg-patient-primary text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
        >
          添加
        </button>
      </div>

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value
            .filter((t) => !PRESET_TIMES.includes(t))
            .map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => toggleTime(time)}
                className="text-2xl-patient px-5 py-3 rounded-xl bg-patient-success text-white font-bold shadow-lg transition-colors"
              >
                {time} ✕
              </button>
            ))}
        </div>
      )}
    </div>
  )
}
