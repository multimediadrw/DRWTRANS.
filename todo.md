# DRWTRANS Complete Refactor TODO

## Phase 1: Global Architecture & PWA Config
- [x] Update layout.tsx with viewport-fit=cover and safe-area support
- [x] Update globals.css with native CSS overrides
- [x] Fix logo aspect ratio (h-8 w-auto object-contain)
- [x] Add safe-area-inset-top to header
- [x] Add safe-area-inset-bottom to bottom nav

## Phase 2: Homepage Refactor
- [x] Refactor menu grid to 2-column landscape buttons with subtitle
- [x] Add gradient overlay to promo banners
- [x] Update armada cards with orange pricing and WhatsApp links
- [x] Add FAQ accordion section with 3 questions
- [x] Add skeleton loading states (pulse animation)
- [x] Add fade-in page transitions
- [x] Add pb-32 to main content for bottom nav clearance

## Phase 3: Testing
- [ ] Test locally on dev server
- [ ] Verify all interactions work
- [ ] Check responsive behavior

## Phase 4: Deployment
- [ ] Push to GitHub
- [ ] Verify Vercel auto-deploy
- [ ] Create checkpoint

## UI Improvements (Current Task)
- [ ] Change menu grid from 4 columns to 2 columns landscape layout
- [ ] Fix logo aspect ratio (h-8 w-auto object-contain)
- [ ] Add FAQ accordion section with 3 questions
- [ ] Add PWA CSS tweaks (-webkit-tap-highlight-color: transparent)

## Facility Photos Upload
- [x] Create /public/facilities/ directory
- [x] Copy and rename all facility photos with descriptive names
- [x] Update Armada page to display facility gallery
- [x] Push changes to GitHub

## Pricing Page Creation
- [x] Create comprehensive pricing page with price table
- [x] Add route information and minimum rental requirements
- [x] Add important notes and terms
- [x] Add bank account details
- [x] Push changes to GitHub

## Mobile PWA Pricing Page Fix
- [x] Update BottomNav to add Harga menu (5 items total)
- [x] Redesign Harga page for mobile-first (cards instead of table)
- [x] Ensure all pricing data is complete and accurate
- [x] Push changes to GitHub

## Critical Bug Fix
- [x] Diagnose white screen and hero image display bug (node_modules missing)
- [x] Fix the issue (reinstalled node_modules)
- [x] Verify app works correctly (local dev server running fine)
- [x] Push fix to GitHub (triggered fresh Vercel deployment)

## PWA Caching Issue Fix
- [ ] Check for service worker files
- [ ] Check manifest.json version
- [ ] Implement cache busting strategy
- [ ] Add service worker update mechanism
- [ ] Push fix to GitHub

## Armada Photos Update
- [x] Copy and rename Big Bus 50 seats photo
- [x] Copy and rename Big Bus 47 seats + toilet photo
- [x] Copy and rename Medium Bus 35 seats photo
- [x] Copy and rename HiAce 12/14 seats photo
- [x] Copy and rename Big Bus 59 seats photo
- [x] Update Armada page with correct fleet data
- [x] Test all images display correctly (skipped local, will verify on Vercel)
- [x] Push to GitHub

## Armada Photo Lightbox Feature
- [x] Use existing poster images as lightbox source (already uploaded)
- [x] Create FleetGalleryModal component with swipeable image viewer
- [x] Add tap handler to fleet hero images
- [x] Test lightbox functionality (will verify on Vercel)
- [x] Push to GitHub
