import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { newsletterSchema, contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the frontend
  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsedData = newsletterSchema.parse(req.body);
      const result = await storage.addNewsletterSubscription(parsedData);
      res.status(201).json({
        success: true,
        message: "Successfully subscribed to newsletter",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: fromZodError(error).message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to subscribe to newsletter"
        });
      }
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parsedData = contactFormSchema.parse(req.body);
      const result = await storage.addContactForm(parsedData);
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: fromZodError(error).message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
