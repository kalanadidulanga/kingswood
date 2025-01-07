import React, { useEffect, useState } from "react";

import Nav from "../components/commen/Nav";
import Footer from "../components/commen/Footer";
import SubHeader from "../components/commen/SubHeader";
import EventItem from "../components/commen/EventItem";

import Header from "../images/theme/background.jpg";

import "./Events.css";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

export default function Events() {
    const { fetch, loading } = useAxios();

    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [filter, setFilter] = useState("all-event");
    const [searchQuery, setSearchQuery] = useState("");

    const fetchEvents = async (eventType) => {
        try {
            let url = "/api/events";
            if (eventType === "upcoming-event") {
                url = "/api/events?eventType=upcoming";
            } else if (eventType === "old-event") {
                url = "/api/events?eventType=past";
            }

            const { data: response } = await fetch({ url, method: "GET" });

            if (response.success) {
                setEvents(response.data.events);
                setFilteredEvents(response.data.events); // Initialize filtered events
            }
        } catch (err) {
            console.error("Error fetching events:", err);
            toast.error("An error occurred while fetching events.");
        }
    };

    useEffect(() => {
        fetchEvents(filter); // Fetch events based on the selected filter
    }, [filter]);

    // Apply client-side search
    useEffect(() => {
        const searchedEvents = events.filter((event) =>
            event.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredEvents(searchedEvents);
    }, [searchQuery, events]);

    return (
        <>
            <Nav></Nav>
            <SubHeader title="Our Events" image={Header}></SubHeader>
            <div className="file-path">
                <div className="file-path-c1">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>/</li>
                        <li>Our Events</li>
                    </ul>
                </div>
                <div className="file-path-c2">
                    <div className="file-path-filter">
                        <select
                            name="event-filter"
                            id="event-filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all-event">All Event</option>
                            <option value="upcoming-event">Upcoming Event</option>
                            <option value="old-event">Old Event</option>
                        </select>
                        <div className="file-path-filter-search">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button>
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="events-s1">
                <div className="container">
                    <div className="event-list">
                        <EventItem events={filteredEvents}></EventItem>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
