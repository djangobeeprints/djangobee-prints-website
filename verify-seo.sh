#!/bin/bash

# SEO Verification Script for Djangobee Prints
# Checks all content files for required SEO fields

echo "🔍 Checking SEO completeness for all content..."
echo ""

missing_description=()
missing_image=()
missing_tag=()

# Check all markdown files in content/
for file in content/**/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")

        # Check for description field
        if ! grep -q "^description:" "$file"; then
            missing_description+=("$file")
        fi

        # Check for image field
        if ! grep -q "^image:" "$file"; then
            missing_image+=("$file")
        fi

        # Check for tag field
        if ! grep -q "^tag:" "$file"; then
            missing_tag+=("$file")
        fi
    fi
done

# Report findings
echo "📊 SEO Check Results:"
echo "===================="

if [ ${#missing_description[@]} -eq 0 ] && [ ${#missing_image[@]} -eq 0 ] && [ ${#missing_tag[@]} -eq 0 ]; then
    echo "✅ All content files have complete SEO metadata!"
else
    if [ ${#missing_description[@]} -gt 0 ]; then
        echo ""
        echo "❌ Missing 'description' field:"
        for file in "${missing_description[@]}"; do
            echo "   - $file"
        done
    fi

    if [ ${#missing_image[@]} -gt 0 ]; then
        echo ""
        echo "⚠️  Missing 'image' field (will use default):"
        for file in "${missing_image[@]}"; do
            echo "   - $file"
        done
    fi

    if [ ${#missing_tag[@]} -gt 0 ]; then
        echo ""
        echo "❌ Missing 'tag' field:"
        for file in "${missing_tag[@]}"; do
            echo "   - $file"
        done
    fi
fi

echo ""
echo "📝 Pre-Launch Checklist:"
echo "======================="
echo "[ ] Create /static/images/default-share.jpg (1200x630px)"
echo "[ ] Verify baseURL in hugo.toml matches your domain"
echo "[ ] All posts have description field"
echo "[ ] All posts have tag and tag_color"
echo "[ ] Test social sharing with Facebook Debugger"
echo "[ ] Test social sharing with Twitter Card Validator"
echo "[ ] Set up Google Search Console after launch"
echo "[ ] Submit sitemap to Google Search Console"
echo ""
