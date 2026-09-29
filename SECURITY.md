# Security

BuildZip executes build commands from projects supplied by the user. Use only ZIP files you trust.

The application runs the renderer with context isolation and without Node.js integration. Build workspaces are created under the operating system temporary directory.

Build commands are intentionally executed with the local user's permissions because compilers, SDKs and package managers require access to the local toolchain. BuildZip is not a sandbox for untrusted source code.
