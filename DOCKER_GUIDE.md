# Docker Deployment Guide

This guide explains how to build and deploy the portfolio using Docker.

## 📋 Prerequisites

- Docker Engine 20.10+ installed
- Docker Compose v2.0+ (optional, for docker-compose usage)
- At least 2GB of available RAM
- 5GB of available disk space

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at http://localhost:3000

### Option 2: Using Docker CLI

```bash
# Build the image
docker build -t saurav-portfolio:latest .

# Run the container
docker run -d \
  --name saurav-portfolio \
  -p 3000:3000 \
  --restart unless-stopped \
  saurav-portfolio:latest

# View logs
docker logs -f saurav-portfolio

# Stop and remove the container
docker stop saurav-portfolio
docker rm saurav-portfolio
```

## 🏗️ Dockerfile Explanation

The Dockerfile uses a **multi-stage build** for optimal image size and security:

### Stage 1: Dependencies
- Base: `node:20-alpine` (minimal Node.js image)
- Installs pnpm package manager
- Installs only production dependencies
- Uses `--frozen-lockfile` to ensure reproducible builds

### Stage 2: Builder
- Builds the Next.js application
- Generates optimized production bundles
- Creates standalone output for minimal runtime dependencies

### Stage 3: Runner
- Minimal runtime image (only ~150MB)
- Runs as non-root user for security
- Exposes port 3000
- Auto-starts on container launch

## 📦 Build Configuration

### Standalone Output
The Next.js app is configured with `output: 'standalone'` which:
- Creates a minimal server bundle
- Includes only necessary dependencies
- Reduces image size by 60-70%
- Improves startup time

### Multi-stage Benefits
- **Smaller Image**: Final image is only ~150MB vs ~500MB
- **Faster Deployments**: Less data to transfer
- **Better Security**: No build tools in production
- **Layer Caching**: Faster rebuilds during development

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file (not included in Docker image by default):

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

To use environment variables with Docker:

**Docker Compose:**
```yaml
services:
  portfolio:
    environment:
      - NEXT_PUBLIC_EMAILJS_SERVICE_ID=${EMAILJS_SERVICE_ID}
      - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=${EMAILJS_TEMPLATE_ID}
      - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=${EMAILJS_PUBLIC_KEY}
    env_file:
      - .env.local
```

**Docker CLI:**
```bash
docker run -d \
  --name saurav-portfolio \
  -p 3000:3000 \
  --env-file .env.local \
  saurav-portfolio:latest
```

### Custom Port

**Docker Compose:**
```yaml
services:
  portfolio:
    ports:
      - "8080:3000"  # Map host port 8080 to container port 3000
```

**Docker CLI:**
```bash
docker run -d -p 8080:3000 saurav-portfolio:latest
```

## 🔍 Monitoring & Logs

### View Logs
```bash
# Docker Compose
docker-compose logs -f

# Docker CLI
docker logs -f saurav-portfolio

# Last 100 lines
docker logs --tail 100 saurav-portfolio
```

### Container Status
```bash
# Docker Compose
docker-compose ps

# Docker CLI
docker ps -a
```

### Resource Usage
```bash
docker stats saurav-portfolio
```

## 🚀 Production Deployment

### Docker Hub Deployment

1. **Tag the image:**
```bash
docker tag saurav-portfolio:latest yourusername/saurav-portfolio:latest
```

2. **Push to Docker Hub:**
```bash
docker push yourusername/saurav-portfolio:latest
```

3. **Deploy on any server:**
```bash
docker pull yourusername/saurav-portfolio:latest
docker run -d -p 3000:3000 yourusername/saurav-portfolio:latest
```

### Cloud Platform Deployment

#### AWS ECS (Elastic Container Service)
```bash
# Build for ARM64 (AWS Graviton)
docker buildx build --platform linux/arm64 -t saurav-portfolio:arm64 .

# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/saurav-portfolio:latest
```

#### Google Cloud Run
```bash
# Build and push
gcloud builds submit --tag gcr.io/PROJECT-ID/saurav-portfolio

# Deploy
gcloud run deploy saurav-portfolio \
  --image gcr.io/PROJECT-ID/saurav-portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### Azure Container Instances
```bash
# Build and push to ACR
az acr build --registry myregistry --image saurav-portfolio:latest .

# Deploy
az container create \
  --resource-group myResourceGroup \
  --name saurav-portfolio \
  --image myregistry.azurecr.io/saurav-portfolio:latest \
  --dns-name-label saurav-portfolio \
  --ports 3000
```

### Kubernetes Deployment

Create `k8s-deployment.yaml`:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: saurav-portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: saurav-portfolio
  template:
    metadata:
      labels:
        app: saurav-portfolio
    spec:
      containers:
      - name: portfolio
        image: saurav-portfolio:latest
        ports:
        - containerPort: 3000
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: saurav-portfolio-service
spec:
  type: LoadBalancer
  ports:
  - port: 80
    targetPort: 3000
  selector:
    app: saurav-portfolio
```

Deploy:
```bash
kubectl apply -f k8s-deployment.yaml
```

## 🧪 Testing Docker Build Locally

### Test the build process:
```bash
# Build without cache
docker build --no-cache -t saurav-portfolio:test .

# Run with mounted logs
docker run -d \
  --name portfolio-test \
  -p 3000:3000 \
  -v $(pwd)/logs:/app/logs \
  saurav-portfolio:test

# Access the container shell
docker exec -it portfolio-test sh

# Check the running processes
docker exec portfolio-test ps aux

# Test health
curl http://localhost:3000
```

## 🐛 Troubleshooting

### Build Issues

**Problem: Build fails with memory error**
```bash
# Increase Docker memory limit (Docker Desktop)
# Settings > Resources > Memory: 4GB+

# Or use build with limited resources
docker build --memory=4g --memory-swap=4g -t saurav-portfolio .
```

**Problem: pnpm install fails**
```bash
# Clear pnpm cache and rebuild
docker build --no-cache -t saurav-portfolio .
```

### Runtime Issues

**Problem: Container exits immediately**
```bash
# Check logs
docker logs saurav-portfolio

# Check if port is already in use
lsof -i :3000
netstat -an | grep 3000
```

**Problem: 3D models not loading**
- Ensure all files in `/public/desktop_pc/` and `/public/moon/` are included
- Check `.dockerignore` doesn't exclude public files
- Verify assets were copied correctly: `docker exec portfolio-test ls -la public/`

**Problem: High memory usage**
```bash
# Limit container memory
docker run -d \
  --name saurav-portfolio \
  -p 3000:3000 \
  --memory="512m" \
  --memory-swap="1g" \
  saurav-portfolio:latest
```

## 📊 Performance Optimization

### Image Size Reduction
- Current image: ~150MB (with multi-stage build)
- Without multi-stage: ~500MB
- **Savings: 70%**

### Build Time Optimization
```bash
# Use BuildKit for faster builds
DOCKER_BUILDKIT=1 docker build -t saurav-portfolio .

# Multi-platform build (for deployment on ARM/AMD)
docker buildx build --platform linux/amd64,linux/arm64 -t saurav-portfolio .
```

### Layer Caching
The Dockerfile is optimized for layer caching:
1. Package files copied first (rarely change)
2. Dependencies installed (cached if package.json unchanged)
3. Source code copied last (changes frequently)

## 🔒 Security Best Practices

✅ **Running as non-root user** (nextjs:nodejs)
✅ **Minimal base image** (alpine linux)
✅ **No build tools in production**
✅ **Separate stages for build and runtime**
✅ **No sensitive files** (.dockerignore excludes .env, .git, etc.)

### Security Scanning
```bash
# Scan for vulnerabilities
docker scan saurav-portfolio:latest

# Or use Trivy
trivy image saurav-portfolio:latest
```

## 📝 Maintenance

### Update Dependencies
```bash
# Rebuild with latest packages
docker build --pull --no-cache -t saurav-portfolio:latest .
```

### Cleanup
```bash
# Remove old containers
docker container prune

# Remove unused images
docker image prune -a

# Remove everything (careful!)
docker system prune -a --volumes
```

### Backup
```bash
# Export image
docker save saurav-portfolio:latest | gzip > saurav-portfolio-backup.tar.gz

# Import image
docker load < saurav-portfolio-backup.tar.gz
```

## 🎯 Summary

The Docker setup provides:
- ✅ **Fast builds** with multi-stage approach
- ✅ **Small images** (~150MB)
- ✅ **Production-ready** with standalone output
- ✅ **Secure** with non-root user
- ✅ **Portable** runs anywhere Docker runs
- ✅ **Scalable** for cloud deployment

---

For questions or issues, check the logs first:
```bash
docker-compose logs -f portfolio
```
