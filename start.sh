#!/bin/bash

# Quick Start Script for Saurav's Portfolio
# This script helps you quickly build and run the application

set -e

echo "🚀 Saurav's Portfolio - Quick Start"
echo "===================================="
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists node; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

if ! command_exists pnpm; then
    echo "📦 pnpm not found. Installing pnpm..."
    npm install -g pnpm
fi

if ! command_exists docker; then
    echo "⚠️  Docker is not installed. Docker deployment will not be available."
    echo "   You can still run the app locally."
    DOCKER_AVAILABLE=false
else
    DOCKER_AVAILABLE=true
fi

echo "✅ Prerequisites check complete!"
echo ""

# Ask user what they want to do
echo "What would you like to do?"
echo "1) Install dependencies and run development server"
echo "2) Build for production and start production server"
echo "3) Build and run with Docker"
echo "4) Build and run with Docker Compose"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📦 Installing dependencies..."
        pnpm install
        
        echo ""
        echo "🚀 Starting development server..."
        echo "   The app will be available at http://localhost:3000"
        echo ""
        pnpm dev
        ;;
    
    2)
        echo ""
        echo "📦 Installing dependencies..."
        pnpm install
        
        echo ""
        echo "🏗️  Building for production..."
        pnpm build
        
        echo ""
        echo "✅ Build complete!"
        echo "🚀 Starting production server..."
        echo "   The app will be available at http://localhost:3000"
        echo ""
        pnpm start
        ;;
    
    3)
        if [ "$DOCKER_AVAILABLE" = false ]; then
            echo "❌ Docker is not installed. Please install Docker first."
            exit 1
        fi
        
        echo ""
        echo "🐳 Building Docker image..."
        docker build -t saurav-portfolio:latest .
        
        echo ""
        echo "🚀 Starting container..."
        docker run -d \
            --name saurav-portfolio \
            -p 3000:3000 \
            --restart unless-stopped \
            saurav-portfolio:latest
        
        echo ""
        echo "✅ Container started successfully!"
        echo "   The app is available at http://localhost:3000"
        echo ""
        echo "Useful commands:"
        echo "  View logs:    docker logs -f saurav-portfolio"
        echo "  Stop:         docker stop saurav-portfolio"
        echo "  Remove:       docker rm saurav-portfolio"
        ;;
    
    4)
        if [ "$DOCKER_AVAILABLE" = false ]; then
            echo "❌ Docker is not installed. Please install Docker first."
            exit 1
        fi
        
        if ! command_exists docker-compose; then
            echo "❌ Docker Compose is not installed."
            exit 1
        fi
        
        echo ""
        echo "🐳 Building and starting with Docker Compose..."
        docker-compose up -d --build
        
        echo ""
        echo "✅ Services started successfully!"
        echo "   The app is available at http://localhost:3000"
        echo ""
        echo "Useful commands:"
        echo "  View logs:    docker-compose logs -f"
        echo "  Stop:         docker-compose down"
        echo "  Restart:      docker-compose restart"
        ;;
    
    *)
        echo "❌ Invalid choice. Please run the script again and choose 1-4."
        exit 1
        ;;
esac

echo ""
echo "🎉 Done! Enjoy the portfolio!"
