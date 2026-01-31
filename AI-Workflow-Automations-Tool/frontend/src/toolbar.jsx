// toolbar.js

import { DraggableNode } from "./draggableNode";
import { newNodesConfig } from "./nodes/nodeConfig";
import { useState } from "react";

export const PipelineToolbar = () => {
    const [selectedCategory, setSelectedCategory] = useState("General");
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const categories = [
        "General",
        "LLMs",
        "Knowledge Base",
        "Integrations",
        "Multi-Modal",
    ];

    return (
        // <div style={{ padding: '10px', backgroundColor: '#e0e0e0' }}>
        //     <div style={{ marginTop: '10px',marginLeft: '15px', display: 'flex', flexWrap: 'wrap', gap: '13px' }}>
        //         {newNodesConfig.map((config) => (
        //             <DraggableNode key={config.id} type={config.type} label={config.data.name} configId={config.id} img={config.data.img} category={config.data.category}/>
        //         ))}
        //     </div>
        // </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Category Selector */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    marginBottom: "10px",
                    marginLeft: "15px",
                }}>
                {categories.map((category) => (
                    <button
                        key={category}
                        // style={{
                        //     backgroundColor: 'transparent',
                        //     // color: selectedCategory === category ? '#000' : '#fff',
                        //     color: hoveredCategory === category ? '#d1d1d1' : selectedCategory === category ? '#1a4aa3' : '#fff',
                        //     border: 'none',
                        //     borderRadius: '5px',
                        //     cursor: 'pointer',
                        //     fontWeight: 600,
                        //     transition: 'color 0.3s ease',
                        // }}
                        style={{
                            padding: "6px 12px",
                            fontFamily: "Inter",
                            fontSize: "12px",
                            fontWeight: "600",
                            borderRadius: "20px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            border: "none",
                            backgroundColor:
                                selectedCategory === category
                                    ? "#2d4ecf"
                                    : "#f1f1f1",
                            color:
                                selectedCategory === category ? "#fff" : "#333",
                            boxShadow:
                                selectedCategory === category
                                    ? '-4px 4px 0px 0px rgba(42, 42, 42, .85)'
                                    : "none",
                                    borderRadius: 20, borderWidth: 1.7, borderColor: '#000', 
                        }}
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>

            {/* Filtered Node List */}
            <div
                style={{
                    marginTop: "10px",
                    marginLeft: "15px",
                    display: "flex",
                    gap: "13px",
                    marginBottom: "10px",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    boxShadow: '',
                }}>
                {newNodesConfig
                    .filter(
                        (config) => config.data.category === selectedCategory
                    )
                    .map((config) => (
                        <DraggableNode
                            key={config.id}
                            type={config.type}
                            label={config.data.name}
                            configId={config.id}
                            img={config.data.img}
                            name={config.data.name}
                        />
                    ))}
            </div>

            {/* Theme toggle */}
            <div style={{ marginRight: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
                <button
                    className="theme-toggle"
                    title="Toggle theme"
                    onClick={() => {
                        try {
                            const isDark = document.body.classList.toggle('night-mode');
                            if (isDark) {
                                localStorage.setItem('theme', 'dark');
                                document.documentElement.classList.remove('light-mode');
                            } else {
                                localStorage.setItem('theme', 'light');
                                document.documentElement.classList.add('light-mode');
                            }
                        } catch (e) {}
                    }}>
                    {/* moon / sun simple svg */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
