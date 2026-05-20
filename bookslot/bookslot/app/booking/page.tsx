
"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingPage() {

    const today =
        new Date().toISOString().split("T")[0];

    const bookedSlotsByDate: any = {
        "2026-05-20": ["10:00 AM", "01:00 PM", "04:00 PM"],
        "2026-05-21": ["09:00 AM", "12:00 PM"],
        "2026-05-22": ["11:00 AM", "03:00 PM"],
    };

    const allSlots = [
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
        "04:00 PM",
        "05:00 PM",
    ];

    const [selectedDate, setSelectedDate] =
        useState(today);

    const [selectedSlot, setSelectedSlot] =
        useState("");

    const bookedSlots =
        bookedSlotsByDate[selectedDate] || [];

    return (
        <div
            style={{
                maxWidth: "750px",
                margin: "40px auto",
                background: "#fff",
                borderRadius: "18px",
                padding: "30px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                fontFamily: "Arial",
            }}
        >

            {/* TITLE */}
            <h2
                style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    marginBottom: "8px",
                    color: "#111827",
                }}
            >
                Book Hackathon Slot
            </h2>

            {/* DATE */}
            <div style={{ marginBottom: "30px" }}>
                <label
                    style={{
                        display: "block",
                        marginBottom: "10px",
                        fontWeight: "600",
                        color: "#111827",
                    }}
                >
                    Select Date
                </label>

                <input
                    type="date"
                    value={selectedDate}
                    min={today}
                    onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setSelectedSlot("");
                    }}
                    style={{
                        width: "100%",
                        padding: "14px",
                        border: "1px solid #d1d5db",
                        borderRadius: "10px",
                        fontSize: "15px",
                        outline: "none",
                        color: "black",
                    }}
                />
            </div>

            {/* SLOT SECTION */}
            <div style={{ marginBottom: "30px" }}>
                <label
                    style={{
                        display: "block",
                        marginBottom: "15px",
                        fontWeight: "600",
                        color: "#111827",
                    }}
                >
                    Available Slots
                </label>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "14px",
                    }}
                >
                    {allSlots.map((slot, index) => {

                        const isBooked =
                            bookedSlots.includes(slot);

                        const isSelected =
                            selectedSlot === slot;

                        return (
                            <button
                                key={index}
                                disabled={isBooked}
                                onClick={() =>
                                    setSelectedSlot(slot)
                                }
                                style={{
                                    minWidth: "130px",
                                    padding: "14px",
                                    borderRadius: "12px",
                                    border: isSelected
                                        ? "2px solid #000"
                                        : isBooked
                                            ? "1px solid #ef4444"
                                            : "1px solid #d1d5db",

                                    background: isBooked
                                        ? "#fee2e2"
                                        : isSelected
                                            ? "#000"
                                            : "#f9fafb",

                                    color: isBooked
                                        ? "#dc2626"
                                        : isSelected
                                            ? "#fff"
                                            : "#111827",

                                    cursor: isBooked
                                        ? "not-allowed"
                                        : "pointer",

                                    transition: "0.3s",

                                    fontWeight: "600",
                                }}
                            >

                                <div
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "700",
                                    }}
                                >
                                    {slot}
                                </div>

                                <div
                                    style={{
                                        marginTop: "6px",
                                        fontSize: "12px",
                                    }}
                                >
                                    {isBooked
                                        ? "Booked"
                                        : isSelected
                                            ? "Selected"
                                            : "Available"}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* SELECTED SLOT CARD */}
            {selectedSlot && (
                <div
                    style={{
                        background: "#f3f4f6",
                        padding: "16px",
                        borderRadius: "12px",
                        marginBottom: "25px",
                        border: "1px solid #d1d5db",
                    }}
                >
                    <p
                        style={{
                            margin: 0,
                            fontWeight: "700",
                            color: "#111827",
                            fontSize: "22px",
                        }}
                    >
                        Book Hackathon Slot
                    </p>

                    <p
                        style={{
                            marginTop: "10px",
                            color: "#374151",
                            fontSize: "18px",
                        }}
                    >
                        {selectedDate}
                    </p>

                    <p
                        style={{
                            marginTop: "5px",
                            color: "#374151",
                            fontSize: "18px",
                        }}
                    >
                        {selectedSlot}
                    </p>
                </div>
            )}

            {/* BUTTON */}
            <Link
                href={{
                    pathname: "/confombook",
                    query: {
                        title: "Book Hackathon Slot",
                        date: selectedDate,
                        time: selectedSlot,
                    },
                }}
            >
                <button
                    disabled={!selectedSlot}
                    style={{
                        width: "100%",
                        padding: "16px",
                        background: !selectedSlot
                            ? "#9ca3af"
                            : "#000",

                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "16px",
                        fontWeight: "700",
                        cursor: !selectedSlot
                            ? "not-allowed"
                            : "pointer",
                    }}
                >
                    Confirm Booking
                </button>
            </Link>

        </div>
    );
}