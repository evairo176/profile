import React, { useState } from "react";
import { useRouter } from "next/router";
import { TEMPLATES } from "./MasterPage.constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Palette, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MasterPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Get template from URL query, default to 0 if not specified
  const getSelectedTemplate = () => {
    const templateQuery = router.query.template as string;
    const templateIndex = templateQuery ? parseInt(templateQuery) : 0;

    // Validate template index
    if (templateIndex >= 0 && templateIndex < TEMPLATES.length) {
      return templateIndex;
    }
    return 0; // Default to first template
  };

  const selectedTemplate = getSelectedTemplate();

  const handleTemplateChange = (value: string) => {
    const templateIndex = parseInt(value);

    // Update URL with new template query parameter
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, template: templateIndex.toString() },
      },
      undefined,
      { shallow: true }, // Don't trigger a full page reload
    );
  };

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen">
      {/* Template Content */}
      <div className="h-full w-full">
        {TEMPLATES[selectedTemplate].component}
      </div>

      {/* Template Selector - Fixed Bottom Right */}
      <div className="fixed right-6 bottom-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-3"
            >
              <div className="bg-card/95 border-border min-w-[250px] rounded-lg border p-4 shadow-lg backdrop-blur-md">
                <div className="mb-3 flex items-center gap-2">
                  <Palette className="text-muted-foreground h-4 w-4" />
                  <span className="text-foreground text-sm font-medium">
                    Select Template
                  </span>
                </div>

                <Select
                  value={selectedTemplate.toString()}
                  onValueChange={handleTemplateChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose template..." />
                  </SelectTrigger>
                  <SelectContent>
                    {TEMPLATES.map((template, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        <div className="flex items-center gap-2">
                          <div className="bg-primary/60 h-2 w-2 rounded-full" />
                          {template.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="border-border mt-3 border-t pt-3">
                  <div className="text-muted-foreground text-xs">
                    Current:{" "}
                    <span className="text-primary font-medium">
                      {TEMPLATES[selectedTemplate].name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={toggleSelector}
            size="icon"
            className={`rounded-full shadow-lg transition-all duration-300 ${
              isOpen
                ? "bg-primary text-primary-foreground"
                : "bg-card/95 border-border hover:bg-accent border backdrop-blur-md"
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <Palette className="text-muted-foreground h-5 w-5" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default MasterPage;
