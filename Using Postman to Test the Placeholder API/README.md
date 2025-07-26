# JSONPlaceholder API Testing Guide

This guide demonstrates how to test the JSONPlaceholder API using Postman.

## Getting Started

### Prerequisites
1. Install Postman:
   - Go to https://www.postman.com/downloads/
   - Download and install Postman for your operating system

### Importing the Collection
1. Download the collection file:
   - Download [jsonplaceholder-collection.json](cci:7://file:///c:/Users/think/Desktop/Using%20Postman%20to%20Test%20the%20Placeholder%20API/jsonplaceholder-collection.json:0:0-0:0) from this directory

2. Import the collection into Postman:
   - Open Postman
   - Click on the "Import" button in the top left
   - Click "Upload Files"
   - Select the downloaded [jsonplaceholder-collection.json](cci:7://file:///c:/Users/think/Desktop/Using%20Postman%20to%20Test%20the%20Placeholder%20API/jsonplaceholder-collection.json:0:0-0:0) file
   - Click "Import"

3. Verify the collection:
   - You should see "JSONPlaceholder API" collection in the left sidebar
   - Expand the collection to see the different requests

## Testing the API

### Basic Testing
1. **GET All Posts**
   - Click on "GET All Posts" request
   - Click the "Send" button
   - In the response tab, you should see 100 posts in JSON format

2. **GET Single Post**
   - Click on "GET Single Post" request
   - Click "Send"
   - Response will show a single post with ID 1

3. **POST Create Post**
   - Click on "POST Create Post" request
   - Click "Send"
   - Note: This will return a 201 status but won't persist the data

4. **PUT Update Post**
   - Click on "PUT Update Post" request
   - Click "Send"
   - Note: This will return a 200 status but won't persist the changes

### Advanced Testing
1. **Filtering Posts**
   - Click on "GET All Posts" request
   - Add a query parameter `userId=1` to filter posts by user
   - Click "Send"
   - Response will show posts created by user ID 1

2. **Testing Other Resources**
   - Expand the "Comments" folder
   - Test the "GET All Comments" request
   - Test the "GET Comments for Post" request

### Understanding the Responses
- All responses will be in JSON format
- Status codes:
  - 200: Success for GET requests
  - 201: Success for POST requests
  - 200: Success for PUT requests
- The API is read-only, so POST, PUT, and DELETE operations won't persist data

## Additional Resources
- API Documentation: https://jsonplaceholder.typicode.com/guide
- Postman Documentation: https://learning.postman.com/docs/s
