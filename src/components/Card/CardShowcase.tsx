"use client";

import { useState } from "react";
import { Card } from "./index";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";
import { ImageCard } from "./ImageCard";
import { InteractiveCard } from "./InteractiveCard";
import { Button } from "@/components/Button";

export function CardShowcase() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="space-y-12 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card variant="default">
            <h3 className="font-semibold mb-2">Default Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Standard card with subtle shadow and border.
            </p>
          </Card>

          <Card variant="elevated">
            <h3 className="font-semibold mb-2">Elevated Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Enhanced shadow for more prominence.
            </p>
          </Card>

          <Card variant="outlined">
            <h3 className="font-semibold mb-2">Outlined Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Prominent border with minimal shadow.
            </p>
          </Card>

          <Card variant="glass">
            <h3 className="font-semibold mb-2">Glass Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Frosted glass effect with backdrop blur.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Hover Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverEffect="lift" hoverable>
            <h3 className="font-semibold mb-2">Lift Effect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Hover to see the lift animation.
            </p>
          </Card>

          <Card hoverEffect="glow" hoverable>
            <h3 className="font-semibold mb-2">Glow Effect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Hover to see the glow effect.
            </p>
          </Card>

          <Card hoverEffect="border" hoverable>
            <h3 className="font-semibold mb-2">Border Effect</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Hover to see the border change.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Card Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card size="sm">
            <h3 className="font-semibold mb-2">Small Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Compact size with minimal padding.
            </p>
          </Card>

          <Card size="md">
            <h3 className="font-semibold mb-2">Medium Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Standard size with balanced padding.
            </p>
          </Card>

          <Card size="lg">
            <h3 className="font-semibold mb-2">Large Card</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Spacious size with generous padding.
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Structured Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="elevated">
            <CardHeader
              title="User Profile"
              subtitle="Active since 2023"
              icon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              actions={
                <Button size="sm" variant="ghost">
                  Edit
                </Button>
              }
            />
            <CardBody>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This card demonstrates the header, body, and footer structure
                with proper spacing and organization.
              </p>
            </CardBody>
            <CardFooter>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          <Card variant="outlined">
            <CardHeader title="Notification Settings" />
            <CardBody padding="md">
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Email notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Push notifications</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">SMS notifications</span>
                </label>
              </div>
            </CardBody>
            <CardFooter justify="between">
              <span className="text-xs text-gray-500">Last updated: Today</span>
              <Button size="sm">Update</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Image Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ImageCard
            imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
            imageAlt="Mountain landscape"
            title="Mountain Adventure"
            description="Explore breathtaking mountain views and hiking trails."
            imageHeight="md"
          />

          <ImageCard
            imageUrl="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=200&fit=crop"
            imageAlt="Ocean sunset"
            title="Ocean Sunset"
            description="Witness stunning sunsets over the ocean."
            imageHeight="md"
            overlay
          />

          <ImageCard
            imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop"
            imageAlt="Forest path"
            title="Forest Trail"
            description="Discover peaceful forest paths and wildlife."
            imageHeight="md"
          >
            <Button size="sm" className="w-full">
              Learn More
            </Button>
          </ImageCard>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Interactive Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["card-1", "card-2", "card-3"].map((cardId) => (
            <InteractiveCard
              key={cardId}
              selected={selectedCard === cardId}
              selectable
              onClick={() => setSelectedCard(cardId)}
              variant="elevated"
              ripple
            >
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Option {cardId.split('-')[1]}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Click to select this option with ripple effect.
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Loading States</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card loading size="sm" />
          <Card loading size="md" />
          <Card loading size="lg" />
        </div>
      </div>
    </div>
  );
}